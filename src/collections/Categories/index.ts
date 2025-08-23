import { CollectionConfig } from 'payload'
import { slugField } from '@/fields/Slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    group: 'Ecommerce',
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
    },
    ...slugField('name'),
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'level',
      type: 'select',
      options: [
        { label: 'Level 1', value: '1' },
        { label: 'Level 2', value: '2' },
        { label: 'Level 3', value: '3' },
      ],
      required: true,
    },
    {
      name: 'subcategories',
      type: 'array',
      fields: [
        {
          name: 'subcategory',
          type: 'relationship',
          relationTo: 'categories',
        },
      ],
    },
  ],
}
