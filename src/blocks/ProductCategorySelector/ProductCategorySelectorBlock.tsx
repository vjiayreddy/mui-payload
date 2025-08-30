'use client'
import ProductCategoryCard from '@/components/Shared/Cards/Categories/ProductCategoryCard/ProductCategoryCard'
import { Category } from '@/payload-types'
import { Container, Grid } from '@mui/material'

const ProductCategorySelectorBlock = ({ categories }: { categories: Category[] }) => {
  return (
    <Container maxWidth="xl" className="py-15 bg-gray-100">
      <Grid container spacing={3}>
        {categories?.map((category) => (
          <Grid
            size={{
              lg: 2,
              md: 3,
              sm: 4,
              xs: 6,
            }}
            key={category?.id}
          >
            <ProductCategoryCard
              image={
                typeof category?.image === 'string'
                  ? category?.image
                  : (category?.image?.url as string)
              }
              title={category?.name}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default ProductCategorySelectorBlock
