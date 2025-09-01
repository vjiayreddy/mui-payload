import { FilterOptionSelector } from '@/fields/FilterOptionsSelector'
import { slugField } from '@/fields/Slug'
import { CollectionConfig } from 'payload'
export const Products: CollectionConfig = {
  slug: 'products',
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
      index: true,
    },
    ...slugField('name'),
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: true,
    },
    {
      name: 'brand',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'filterType',
      type: 'select',
      options: [
        { label: 'RAM', value: 'RAM' },
        { label: 'Storage', value: 'Storage' },
      ],
    },
    FilterOptionSelector('filters', '', {
      fieldOverride: {
        name: 'filterOptions',
        label: 'Filter Options',
        admin: {
          condition: (_, { filterType }) => !!filterType,
        },
      },
    }),
  ],
}
