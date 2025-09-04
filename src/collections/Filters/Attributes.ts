import { slugField } from '@/fields/Slug'
import { CollectionConfig } from 'payload'

export const FilterAttributes: CollectionConfig = {
  slug: 'filter-attributes',
  admin: {
    group: 'Ecommerce',
    useAsTitle: 'displayLabel',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.filterCategory && data.label) {
          try {
            const filterCategory = await req.payload.findByID({
              collection: 'filter-categories',
              id: data.filterCategory,
            })
            data.displayLabel = `${data.label}(${filterCategory.name})`
          } catch (_error) {
            data.displayLabel = data.label
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'filterCategory',
      type: 'relationship',
      relationTo: 'filter-categories',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'displayLabel',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    ...slugField('label'),
  ],
}
