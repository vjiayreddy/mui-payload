import { GlobalConfig } from 'payload'
import { revalidateHeader } from './revalidate'
import { ColorInput } from '@/fields/ColorPicker/color'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'topInfoBar',
      type: 'group',
      label: 'Topbar Configuration',
      fields: [
        {
          name: 'tapBarStatus',
          type: 'text',
          label: 'Topbar Status',
        },
        {
          name: 'topBarTitle',
          type: 'text',
          label: 'Topbar Title',
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          minRows: 2,
          maxRows: 4,
          fields: [
            {
              name: 'socialMediaName',
              type: 'text',
              label: 'Social Media Name',
              required: true,
            },
            {
              name: 'iconName',
              label: 'Iconify Icon Name',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Social Media Url',
              required: true,
            },
          ],
        },
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      type: 'text',
      name: 'brandName',
      label: 'Brand Name',
      required: true,
      defaultValue: 'CartWale',
      admin: {
        description: 'This is the name of the website  that will be displayed in the header.',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'text',
      name: 'iconifyIconName',
      label: 'Iconify Icon Name',
      admin: {
        description: 'Brand Icon name from Iconify',
      },
      required: false,
    },
    ColorInput(),
    {
      type: 'array',
      name: 'navLinks',
      label: 'Navigation Links',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Name',
          required: true,
        },
        {
          type: 'text',
          name: 'link',
          label: 'Link',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
