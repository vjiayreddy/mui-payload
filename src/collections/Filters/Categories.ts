import { slugField } from '@/fields/Slug'
import { CollectionConfig } from 'payload'

export const FilterCategories: CollectionConfig = {
  slug: 'filter-categories',
  admin: {
    group: 'Ecommerce',
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    ...slugField('name'),
  ],
}
