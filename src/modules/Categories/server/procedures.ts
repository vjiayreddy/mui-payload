/* eslint-disable @typescript-eslint/no-explicit-any */
import { Media } from '@/payload-types'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'

export const categoriesProcedures = createTRPCRouter({
  getLevelOneCategories: baseProcedure.query(async ({ ctx }) => {
    const rootCategories = await ctx.payload.find({
      collection: 'categories',
      depth: 3,
      sort: 'name',
      pagination: false,
      where: {
        and: [
          {
            level: {
              equals: '1',
            },
            isPublished: {
              equals: true,
            },
          },
        ],
      },
    })
    const formattedCategories = rootCategories.docs.map((doc) => ({
      ...doc,
      image: (doc.image as Media) || null,
      childrens: (doc.subcategories || []).map((levelTwo: any) => ({
        id: levelTwo.id,
        name: levelTwo?.subcategory?.name || '',
        slug: levelTwo?.subcategory?.slug || '',
        image: (levelTwo?.subcategory?.image as Media) || null,
        childrens: (levelTwo?.subcategory?.subcategories || []).map((levelThree: any) => ({
          id: levelThree.id,
          name: levelThree?.subcategory?.name || '',
          slug: levelThree?.subcategory?.slug || '',
          image: (levelThree?.subcategory?.image as Media) || null,
        })),
      })),
    }))
    return formattedCategories
  }),
})
