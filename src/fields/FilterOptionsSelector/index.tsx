import type { Field } from 'payload'

type Overrides = {
  fieldOverride?: Partial<Field>
}

type FilterOptionSelector = (
  collectionSlug?: string,
  filterParam?: string,
  overrides?: Overrides,
) => Field

export const FilterOptionSelector: FilterOptionSelector = (
  collectionSlug,
  filterParam,
  overrides = {},
) => {
  const { fieldOverride = {} } = overrides

  const filterOptionSelectorField: Field = {
    name: 'filterOptionSelectorField',
    type: 'text',
    label: 'Filter Option Selector Field',
    hasMany: true,
    ...fieldOverride,
    admin: {
      ...fieldOverride?.admin,
      components: {
        Field: {
          path: '@/fields/FilterOptionsSelector/FilterOptionSelector#FilterOptionSelectorComponent',
          clientProps: {
            collectionSlug,
            filterParam,
          },
        },
      },
    },
  } as Field
  return filterOptionSelectorField
}
