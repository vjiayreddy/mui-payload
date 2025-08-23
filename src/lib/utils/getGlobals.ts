import type { Config, Media } from "src/payload-types";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { unstable_cache } from "next/cache";

type Global = keyof Config["globals"];

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise });
  const global = await payload.findGlobal({
    slug,
    depth,
  });

  // Ensure we're returning the same type as expected by Header interface
  return {
    ...global,
    // Handle logo based on its type (string or Media object)
    logo: typeof global.logo === 'string' ? global.logo : global.logo,
  };
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  });
