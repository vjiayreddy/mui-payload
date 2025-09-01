import { slugField } from '@/fields/Slug'
import { CollectionConfig } from 'payload'

export const Filters: CollectionConfig = {
  slug: 'filters',
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
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'MultiSelect', value: 'multi_select' },
        { label: 'Single Select', value: 'single_select' },
        { label: 'Rangle', value: 'rangle-select' },
      ],
      defaultValue: 'multi_select',
    },
    {
      name: 'options',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
