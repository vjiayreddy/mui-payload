import React, { Suspense } from "react";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CategoriesClient from "./CategoriesClient";

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
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesClient />
      </Suspense>
    </HydrationBoundary>
  );
};

export default ServerCategoriesComponent;
