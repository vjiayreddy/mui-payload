/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Navigation from "@/src/components/shared/navigation/Navigation";
import { useTRPC } from "@/src/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const CategoriesClient = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.categories.getLevelOneCategories.queryOptions()
  );
  return (
    <Navigation data={data}/>
  );
};
export default CategoriesClient;
