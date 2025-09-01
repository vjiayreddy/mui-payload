'use client'
import * as React from 'react'
import { SelectInput, useField } from '@payloadcms/ui'
import { SelectFieldClientProps } from 'payload'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'

interface FilterOption {
  label: string
  value: string
}

type FilterOptionSelectorComponentProps = {
  collectionSlug: string
  filterParam: string
} & SelectFieldClientProps

export const FilterOptionSelectorComponent: React.FC<FilterOptionSelectorComponentProps> = ({
  path,
  collectionSlug,
  filterParam,
}) => {
  const { value, setValue } = useField<string[]>({ path })
  const { value: filterTypeValue } = useField<string>({ path: 'filterType' })
  const trpc = useTRPC()
  
  // Use dynamic filter parameter based on filterType selection
  const dynamicFilterParam = filterTypeValue || filterParam

  // Clear selected values when filterType changes
  React.useEffect(() => {
    if (filterTypeValue && value && value.length > 0) {
      setValue([])
    }
  }, [filterTypeValue, setValue])

  // Memoize query options to prevent unnecessary refetches
  const queryOptions = React.useMemo(
    () => ({
      collectionSlug: collectionSlug,
      name: dynamicFilterParam,
    }),
    [collectionSlug, dynamicFilterParam],
  )

  const { data } = useQuery(trpc.filters.getFilters.queryOptions(queryOptions))

  // Memoize options transformation to prevent unnecessary recalculations
  const options = React.useMemo<FilterOption[]>(() => {
    if (!data || !data[0]?.options) return []

    return data[0].options.map((option: any) => ({
      label: option.label,
      value: option.id,
    }))
  }, [data])

  // Memoize onChange handler to prevent SelectInput re-renders
  const handleChange = React.useCallback(
    (selectedOptions: any) => {
      setValue(selectedOptions.map((option: any) => option.value))
    },
    [setValue],
  )

  return (
    <div>
      <label className="field-label">Custom Select - Countries</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        hasMany={true}
        onChange={handleChange}
      />
    </div>
  )
}
