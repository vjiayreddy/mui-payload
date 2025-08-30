import { ColorInput } from '@/fields/ColorPicker/color'
import { Block } from 'payload'

export const AnimatedAdsBannerArea: Block = {
  slug: 'animatedAdsBannerArea',
  interfaceName: 'AnimatedAdsBannerAreaBlock',
  imageURL: '/api/media/file/block_ads_banner.png',
  fields: [
    {
      type: 'group',
      name: 'Content',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'titleNormal',
          type: 'text',
          required: true,
        },
        {
          name: 'titleBold',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'Customization',
      fields: [
        ColorInput({
          name: 'headingColor',
          label: 'Heading Color',
          defaultValue: '#ffffff',
        }),
        ColorInput({
          name: 'titleNormalColor',
          label: 'Title Normal Color',
          defaultValue: '#ffffff',
        }),
        ColorInput({
          name: 'titleBoldColor',
          label: 'Title Bold Color',
          defaultValue: '#ffffff',
        }),
        ColorInput({
          name: 'animatedSectionBgColor',
          label: 'Animated Section Background Color',
          defaultValue: '#000000',
        }),
        ColorInput({
          name: 'sectionBgColor',
          label: 'Section Background Color',
          defaultValue: '#ffffff',
        }),
      ],
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  labels: {
    singular: 'Animated Ads Banner Area',
    plural: 'Animated Ads Banner Areas',
  },
}
