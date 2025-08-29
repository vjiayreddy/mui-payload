import { ColorInput } from '@/fields/ColorPicker/color'
import { Block } from 'payload'

export const ProductHeroSlider: Block = {
  slug: 'productHeroSlider',
  interfaceName: 'ProductHeroSliderBlock',
  imageURL: '/api/media/file/product_hero_slider.png',
  fields: [
    {
      name: 'slides',
      type: 'array',
      fields: [
        {
          name: 'discountTitle',
          label: 'Discount Title',
          type: 'text',
          required: false,
        },
        ColorInput({
          name: 'discountTitleColor',
          label: 'Discount Title Color',
          defaultValue: '#000000',
          admin: {
            description: 'Discount Title Color',
          },
        }),
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        ColorInput({
          name: 'titleColor',
          label: 'Title Color',
          defaultValue: '#000000',
        }),
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
        ColorInput({
          name: 'descriptionTextColor',
          label: 'Description Text Color',
          defaultValue: '#000000',
        }),
        {
          name: 'background_color_type',
          label: 'Background Color Type',
          type: 'select',
          options: [
            {
              label: 'Color',
              value: 'color',
            },
            {
              label: 'Gradient',
              value: 'gradient',
            },
          ],
          defaultValue: 'color',
        },
        ColorInput({
          name: 'slideBackgroundColor',
          label: 'Slider Background Color',
          defaultValue: '#ecf0f1',
          admin: {
            condition: (data, siblings) => {
              return siblings?.background_color_type === 'color'
            },
          },
        }),
        {
          name: 'gradient_colors',
          type: 'group',
          label: 'Gradient Colors',
          fields: [
            ColorInput({
              name: 'from_color',
              label: 'From Color',
              defaultValue: '#ffffff',
            }),
            ColorInput({
              name: 'via_color',
              label: 'Via Color',
              defaultValue: '#ffffff',
            }),
            ColorInput({
              name: 'to_color',
              label: 'To Color',
              defaultValue: '#ffffff',
            }),
          ],
          admin: {
            condition: (data, siblings) => {
              return siblings?.background_color_type === 'gradient'
            },
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 6,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  labels: {
    plural: 'Product Hero Sliders',
    singular: 'Product Hero Slider',
  },
}
