import { Block } from 'payload'

export const ProductCategorySelector: Block = {
  slug: 'productCategorySelector',
  interfaceName: 'ProductCategorySelectorBlock',
  imageURL: '/api/media/file/block_product_categories_selector.png',
  fields: [
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      filterOptions: {
        level: {
          equals: '2',
        },
      },
      minRows: 6,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  labels: {
    plural: 'Product Category Selectors',
    singular: 'Product Category Selector',
  },
}
