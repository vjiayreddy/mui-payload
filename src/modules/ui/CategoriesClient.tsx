"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const CategoriesClient = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.categories.getLevelOneCategories.queryOptions()
  );
  return (
    <div>Categories: {JSON.stringify(data)}</div>
  );
};
export default CategoriesClient;
