'use client'
import * as React from 'react'
import { SelectInput, useField } from '@payloadcms/ui'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'

interface CountryOption {
  label: string
  value: string
}

export const CustomSelectComponent: React.FC<{ path: string }> = ({ path }) => {
  const { value, setValue } = useField<string[]>({ path })
  const [options, setOptions] = React.useState<CountryOption[]>([])
  const trpc = useTRPC()
  const { data } = useQuery(
    trpc.filters.getFilters.queryOptions({ collectionSlug: 'filters', name: 'RAM' }),
  )

  // Fetch options on component mount
  React.useEffect(() => {
    if (data) {
      const _options = data[0]?.options?.map((option: any) => ({
        label: option.label,
        value: option.id,
      }))
      setOptions(_options || [])
    }
  }, [data])

  return (
    <div>
      <label className="field-label">Custom Select - Countries</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        hasMany={true}
        onChange={(selectedOptions: any) => {
          setValue(selectedOptions.map((option: any) => option.value))
        }}
      />
    </div>
  )
}
