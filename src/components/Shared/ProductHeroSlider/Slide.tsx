'use client'
import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { ProductHeroSliderBlock as ProductHeroSliderBlockProps } from '@/payload-types'

export type ProductHeroSlideType = NonNullable<ProductHeroSliderBlockProps['slides']>[number]

interface ProductHeroSlideProps {
  slideType: ProductHeroSlideType
}

const ProductHeroSlide: React.FC<ProductHeroSlideProps> = ({ slideType }) => {
  return (
    <Container maxWidth="xl" className="h-full">
      <Grid container spacing={2} className="h-full">
        <Grid size={6} container direction="column" justifyContent="center" alignItems="flex-start">
          <Box p={5}>
            {slideType.discountTitle && (
              <Typography
                gutterBottom
                variant="h1"
                component="h1"
                className="text-4xl font-bold"
                style={{ color: slideType.descriptionTextColor as string }}
              >
                {slideType.discountTitle}
              </Typography>
            )}

            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className="text-6xl font-bold"
              style={{ color: slideType.discountTitleColor as string }}
            >
              {slideType.title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className="text-2xl font-extralight"
              style={{ color: slideType.descriptionTextColor as string }}
            >
              {slideType.description}
            </Typography>
            <Box mt={2}>
              <Grid container>
                <Grid size="auto">
                  <Button size="large" variant="contained" color="primary">
                    ShopNow
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid size={6} container direction="column" justifyContent="center" alignItems="center">
          <Box component="div" className="h-full w-full relative">
            <Image
              alt="banner_image"
              fill={true}
              src={
                typeof slideType.image === 'string'
                  ? (slideType.image as string)
                  : (slideType.image?.url as string)
              }
              objectFit="scale-down"
              objectPosition="center"
              priority={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductHeroSlide
