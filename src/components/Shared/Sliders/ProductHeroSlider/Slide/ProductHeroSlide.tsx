import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { StyledRoot } from '../styled'
import LazyImage from '@/components/Shared/LazyImage'
import { Box, Container, Typography } from '@mui/material'
import { ProductHeroSliderBlock } from '@/payload-types'

type slideProp = NonNullable<ProductHeroSliderBlock['slides']>[number]

const ProductHeroSlide = ({
  title,
  image,
  description,
  titleColor,
  discountTitle,
  discountTitleColor,
  descriptionTextColor,
}: slideProp) => {
  return (
    <StyledRoot>
      <Grid width="100%" container spacing={3} alignItems="center">
        <Grid
          className="grid-item"
          size={{
            xl: 6,
            md: 6,
            sm: 6,
            lg: 6,
            xs: 12,
          }}
        >
          <Box width="75%">
            {discountTitle && (
              <Typography
                variant="h1"
                className="discount-title"
                sx={{ color: discountTitleColor }}
              >
                {discountTitle}
              </Typography>
            )}
            <Typography variant="h1" className="title" sx={{ color: titleColor }}>
              {title}
            </Typography>
            <p className="description" style={{ color: descriptionTextColor as string }}>
              {description}
            </p>
            <Button
              size="large"
              disableElevation
              href="#"
              color="primary"
              variant="contained"
              className="button-link"
            >
              Shop Now
            </Button>
          </Box>
        </Grid>

        <Grid
          size={{
            xl: 6,
            md: 6,
            sm: 6,
            lg: 6,
            xs: 12,
          }}
        >
          <div className="img-wrapper">
            <LazyImage
              fill
              src={typeof image === 'string' ? (image as string) : (image.url as string)}
              alt={title}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        </Grid>
      </Grid>
    </StyledRoot>
  )
}
export default ProductHeroSlide
