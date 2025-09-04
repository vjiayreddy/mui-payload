'use client'

import React, { useEffect, useCallback } from 'react'
import { useFormFields, useField } from '@payloadcms/ui'
import { RelationshipField } from '@payloadcms/ui'

interface SmartRelationshipProps {
  path: string
  field: any
}

export const SmartRelationshipComponent: React.FC<SmartRelationshipProps> = ({
  path,
  field,
}) => {
  const { value, setValue } = useField<any>({ path })
  const clearOnSiblingChange = field.custom?.clearOnSiblingChange

  // Get sibling field values
  const siblingFields = useFormFields(([fields]) => {
    if (!clearOnSiblingChange) return {}
    
    // Extract the parent path (for array items)
    const pathParts = path.split('.')
    const parentPath = pathParts.slice(0, -1).join('.')
    const siblingPath = parentPath ? `${parentPath}.${clearOnSiblingChange}` : clearOnSiblingChange
    
    return {
      siblingValue: fields[siblingPath]?.value,
      siblingInitialValue: fields[siblingPath]?.initialValue,
    }
  })

  // Clear field when sibling changes
  const clearField = useCallback(() => {
    if (field.hasMany) {
      setValue([])
    } else {
      setValue(null)
    }
  }, [setValue, field.hasMany])

  useEffect(() => {
    if (clearOnSiblingChange && siblingFields.siblingValue !== undefined) {
      // Check if sibling value has changed from initial value
      if (
        siblingFields.siblingInitialValue !== undefined &&
        siblingFields.siblingValue !== siblingFields.siblingInitialValue &&
        value // Only clear if current field has a value
      ) {
        clearField()
      }
    }
  }, [
    siblingFields.siblingValue,
    siblingFields.siblingInitialValue,
    clearOnSiblingChange,
    clearField,
    value,
  ])

  // Render the default relationship field
  return <RelationshipField path={path} field={field} />
}

export default SmartRelationshipComponent
