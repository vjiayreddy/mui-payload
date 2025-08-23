import React, { Suspense } from 'react'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Categories from './Categories'
import SkeltonCategories from './SkeltonCategories'

const ServerCategories = () => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    trpc.categories.getLevelOneCategories.queryOptions(undefined, {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
    }),
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<SkeltonCategories />}>
        <Categories />
      </Suspense>
    </HydrationBoundary>
  )
}

export default ServerCategories
