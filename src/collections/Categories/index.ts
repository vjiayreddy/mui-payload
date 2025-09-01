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
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      filterOptions: ({ data }) => {
        if (data?.level === '2') return { level: { equals: '1' } }
        if (data?.level === '3') return { level: { equals: '2' } }
        return {
          level: {
            exists: false,
          },
        }
      },
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
    {
      name: 'availableFilters',
      type: 'relationship',
      relationTo: 'filters',
      hasMany: true,
      admin: {
        description: 'Select which filters should be available for this category',
      },
    },
  ],
}
