# SmartRelationship Field

A custom Payload CMS relationship field component that automatically clears its value when a specified sibling field changes.

## Features

- **Auto-clearing**: Automatically clears the relationship field when a sibling field value changes
- **Configurable**: Specify which sibling field to watch for changes
- **Type-safe**: Full TypeScript support with proper Payload CMS types
- **Reusable**: Can be used across multiple collections and field configurations

## Usage

### Basic Example

```typescript
import { SmartRelationshipField } from '@/fields/SmartRelationship'

// In your collection config
fields: [
  {
    name: 'category',
    type: 'relationship',
    relationTo: 'categories',
  },
  SmartRelationshipField({
    name: 'subcategory',
    relationTo: 'categories',
    clearOnSiblingChange: 'category', // Clear when 'category' changes
    filterOptions: ({ siblingData }) => {
      if (siblingData?.category) {
        return { parent: { equals: siblingData.category } }
      }
      return false
    },
  }),
]
```

### Array Field Example

```typescript
// Inside an array field
{
  name: 'categoryFilters',
  type: 'array',
  fields: [
    {
      name: 'filterName',
      type: 'relationship',
      relationTo: 'filter-categories',
    },
    SmartRelationshipField({
      name: 'filterAttributes',
      relationTo: 'filter-attributes',
      hasMany: true,
      clearOnSiblingChange: 'filterName', // Clear when filterName changes
      admin: {
        condition: (_, siblingData) => !!siblingData?.filterName,
        description: 'Attributes will auto-clear when filter name changes',
      },
      filterOptions: ({ siblingData }) => {
        if (siblingData?.filterName) {
          return { filterCategory: { equals: siblingData.filterName } }
        }
        return false
      },
    }),
  ],
}
```

## API Reference

### SmartRelationshipFieldProps

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ✅ | Field name |
| `label` | `string` | ❌ | Field label (defaults to name) |
| `relationTo` | `CollectionSlug \| CollectionSlug[]` | ✅ | Target collection(s) |
| `hasMany` | `boolean` | ❌ | Allow multiple selections (default: false) |
| `required` | `boolean` | ❌ | Field is required (default: false) |
| `clearOnSiblingChange` | `string` | ❌ | Sibling field name to watch for changes |
| `admin` | `object` | ❌ | Admin UI configuration |
| `filterOptions` | `function` | ❌ | Filter available options based on other fields |

### Admin Configuration

```typescript
admin: {
  condition?: (data: any, siblingData: any) => boolean
  description?: string
  // ... other admin properties
}
```

### Filter Options

```typescript
filterOptions: ({ siblingData, data }) => {
  // Return filter criteria or false to show no options
  if (siblingData?.someField) {
    return { someProperty: { equals: siblingData.someField } }
  }
  return false
}
```

## How It Works

1. **Monitoring**: The component uses `useFormFields` to monitor sibling field values
2. **Change Detection**: Compares current value with initial value to detect changes
3. **Auto-clearing**: When the watched sibling field changes, the relationship field is cleared
4. **Preservation**: Only clears when there's an actual change and existing value

## Benefits

- **Better UX**: Users don't need to manually clear dependent fields
- **Data Integrity**: Prevents invalid relationship combinations
- **Reusable**: Single component handles all auto-clearing relationship scenarios
- **Performance**: Only re-renders when necessary using React hooks

## File Structure

```
src/fields/SmartRelationship/
├── index.ts          # Field factory function and types
├── Component.tsx     # React component with auto-clearing logic
└── README.md         # This documentation
```

## Example Use Cases

- **Category → Subcategory**: Clear subcategory when main category changes
- **Brand → Model**: Clear model selection when brand changes  
- **Filter Category → Filter Attributes**: Clear attributes when filter type changes
- **Country → State/Province**: Clear state when country changes
- **Department → Employee**: Clear employee when department changes

## Notes

- The component extends Payload's built-in `RelationshipField`
- Auto-clearing only happens when the field has an existing value
- Works within array fields and nested structures
- Maintains all standard relationship field functionality
