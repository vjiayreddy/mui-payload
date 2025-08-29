import { Block } from 'payload'

export const ServiceGuarantees: Block = {
  slug: 'serviceGuarantees',
  interfaceName: 'ServiceGuaranteesBlock',
  imageURL: '/api/media/file/block_service_guarantees.png',
  fields: [
    {
      name: 'services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'iconName',
          label: 'Iconify Icon Name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 4,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  labels: {
    plural: 'Service Guarantees',
    singular: 'Service Guarantee',
  },
}
