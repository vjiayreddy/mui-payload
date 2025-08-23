import { categoriesProcedures } from '@/modules/Categories/server/procedures'
import { createTRPCRouter } from '../init'
import { pagesProcedures } from '@/modules/Pages/server/procedures'

export const appRouter = createTRPCRouter({
  categories: categoriesProcedures,
  pages: pagesProcedures,
})
// export type definition of API
export type AppRouter = typeof appRouter
