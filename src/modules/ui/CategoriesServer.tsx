import React, { Suspense } from "react";
import { getQueryClient, trpc } from "@/src/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CategoriesClient from "./CategoriesClient";
import { NavigationSkeleton } from "@/src/components/shared/navigation/Navigation";

const ServerCategoriesComponent = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getLevelOneCategories.queryOptions(undefined, {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<NavigationSkeleton />}>
        <CategoriesClient />
      </Suspense>
    </HydrationBoundary>
  );
};

export default ServerCategoriesComponent;
