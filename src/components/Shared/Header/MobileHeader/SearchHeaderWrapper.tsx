'use client'

import { Suspense } from 'react'
import HeaderSearch from './SearchHeader'

export default function SearchHeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <HeaderSearch>{children}</HeaderSearch>
    </Suspense>
  )
}
