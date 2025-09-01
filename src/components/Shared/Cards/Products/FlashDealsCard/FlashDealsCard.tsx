'use client'
import Link from 'next/link'
import Rating from '@mui/material/Rating'
import IconButton from '@mui/material/IconButton'
import RemoveRedEye from '@mui/icons-material/RemoveRedEye'
import { ImageWrapper, ContentWrapper, StyledCard, HoverIconWrapper } from './styled'
import LazyImage from '@/components/Shared/LazyImage'
import DiscountChip from '../Components/DiscountChip'
import FavoriteButton from './FavoriteButton'
import ProductTitle from '../Components/ProductTitle'
import ProductPrice from './ProductPrice'
import AddToCart from './AddToCart'
import { Product } from '@/payload-types'
import { Box, Grid } from '@mui/material'

const FlashDealCard = ({
  product,
  showProductSize,
  showRating = true,
}: {
  product: Product
  showProductSize?: boolean
  showRating?: boolean
}) => {
  const { slug, name, price, image } = product
  return (
    <StyledCard elevation={6}>
      <ImageWrapper>
        <DiscountChip discount={30} />
        <HoverIconWrapper className="hover-box">
          <Link href={`/products/${slug}/view`} scroll={false}>
            <IconButton color="inherit">
              <RemoveRedEye fontSize="small" color="inherit" />
            </IconButton>
          </Link>

          <FavoriteButton />
        </HoverIconWrapper>
        <Link href={`/products/${slug}`}>
          <LazyImage
            priority
            alt={name}
            fill={true}
            src={typeof image === 'string' ? (image as string) : (image?.url as string)}
            className="thumbnail"
          />
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <div className="content">
          <Box>
            <ProductTitle title={name} slug={slug} />
          </Box>
          <Box>{showRating && <Rating size="small" value={4} color="warn" readOnly />}</Box>
          <Grid container>
            <Grid size="grow">
              <ProductPrice discount={30} price={price} />
            </Grid>
            <Grid size="auto">
              <AddToCart product={product} />
            </Grid>
          </Grid>
        </div>
      </ContentWrapper>
    </StyledCard>
  )
}
export default FlashDealCard
