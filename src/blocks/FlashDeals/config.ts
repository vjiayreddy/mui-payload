import { Block } from 'payload'

export const flashDealsConfig: Block = {
  slug: 'flashDeals',
  interfaceName: 'FlashDealsBlock',
  imageURL: '/api/media/file/block_flash_deals.png',
  fields: [
    {
      name: 'sectionHeading',
      label: 'Section Heading',
      type: 'text',
      required: false,
    },
    {
      name: 'iconName',
      label: 'Iconify Icon Name',
      type: 'text',
      required: false,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      minRows: 5,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],

  labels: {
    plural: 'Flash Deals',
    singular: 'Flash Deal',
  },
}
