import type { CollectionSlug, RelationshipField } from 'payload'

export interface SmartRelationshipFieldProps {
  name: string
  label?: string
  relationTo: CollectionSlug | CollectionSlug[]
  hasMany?: boolean
  required?: boolean
  clearOnSiblingChange?: string // Field name to watch for changes
  admin?: {
    condition?: (data: any, siblingData: any) => boolean
    description?: string
  }
  filterOptions?: (args: { siblingData: any; data: any }) => any
}

export const SmartRelationshipField = (props: SmartRelationshipFieldProps): RelationshipField => {
  const {
    name,
    label,
    relationTo,
    hasMany = false,
    required = false,
    clearOnSiblingChange,
    admin,
    filterOptions,
  } = props

  return {
    name,
    type: 'relationship',
    label,
    relationTo,
    hasMany,
    required,
    admin: {
      ...admin,
      components: {
        Field: '@/fields/SmartRelationship/Component',
      },
    },
    custom: {
      clearOnSiblingChange,
    },
    filterOptions,
  } as RelationshipField
}
