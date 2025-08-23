import type { TextField } from 'payload'

export const ColorInput = (overrides?: Omit<TextField, 'type'>): TextField => {
  const { name = 'color', label = 'Color', admin, ...rest } = overrides ?? {}
  return {
    name,
    type: 'text',
    label,
    admin: {
      ...admin,
      components: {
        Field: '@/fields/ColorPicker/ColorPickerComponent',
      },
    },
    ...rest,
  } as TextField
}
