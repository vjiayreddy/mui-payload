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
      type: 'group',
      fields: [
        {
          name: 'variants',
          type: 'array',
          labels: {
            singular: 'Variant',
            plural: 'Variants',
          },
          fields: [
            {
              name: 'attribute',
              type: 'relationship',
              relationTo: 'filter-categories',
              required: true,
              unique: true,
              index: true,
            },
            {
              name: 'options',
              type: 'relationship',
              relationTo: 'filter-attributes',
              required: true,
              hasMany: true,
              unique: true,
              index: true,
              filterOptions: ({ siblingData }) => {
                const typedSiblingData = siblingData as { attribute?: string }
                if (typedSiblingData?.attribute) {
                  return {
                    filterCategory: { equals: typedSiblingData.attribute },
                  }
                }
                return false
              },
            },
          ],
        },
      ],
    },
  ],
}
