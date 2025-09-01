import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { z } from 'zod'
import type { CollectionSlug } from 'payload'
import type { Filter } from '@/payload-types'
export const filtersProcedures = createTRPCRouter({
  getFilters: baseProcedure
    .input(z.object({ name: z.string(), collectionSlug: z.string() }))
    .query(async ({ ctx, input }) => {
      const filters = await ctx.payload.find({
        collection: input.collectionSlug as CollectionSlug,
        pagination: false,
        where: {
          and: [
            {
              isActive: {
                equals: true,
              },
            },
            {
              name: {
                equals: input.name,
              },
            },
          ],
        },
      })

      const formattedFilters = filters.docs.map((doc) => ({
        id: doc.id,
        name: (doc as Filter).name,
        slug: (doc as Filter).slug,
        options: (doc as Filter).options || [],
      }))
      return formattedFilters
    }),
})
