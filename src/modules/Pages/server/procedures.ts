import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { Where } from 'payload'
import { z } from 'zod'

export const pagesProcedures = createTRPCRouter({
  getPages: baseProcedure
    .input(
      z.object({
        draft: z.boolean().optional().default(false),
        limit: z.number().optional().default(1000),
        overrideAccess: z.boolean().optional().default(false),
        pagination: z.boolean().optional().default(false),
        slug: z.string().optional(),
        select: z
          .object({
            slug: z.boolean().optional().default(true),
          })
          .optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {}
      if (input.slug) {
        where.slug = {
          equals: input.slug,
        }
      }
      const pages = await ctx.payload.find({
        collection: 'pages',
        draft: input.draft,
        limit: input.limit,
        overrideAccess: input.overrideAccess,
        pagination: input.pagination,
        select: input.select,
        where,
      })
      return pages.docs
    }),
})
