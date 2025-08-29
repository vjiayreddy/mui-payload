'use client'

import { Box, Container, styled } from '@mui/material'
import SlikSlider from '../SlikSlider/SlikSlider'
import ProductHeroSlide from './Slide/ProductHeroSlide'
import { ProductHeroSliderBlock as ProductHeroSliderBlockProps } from '@/payload-types'
import { shouldForwardProp } from '@/lib/utils'

interface StyledProductHeroSliderWrapperProps {
  component?: React.ElementType
  slideProps?: NonNullable<ProductHeroSliderBlockProps['slides']>[number]
}

const StyledProductHeroSliderWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<StyledProductHeroSliderWrapperProps>(['component', 'slideProps'], prop),
})<StyledProductHeroSliderWrapperProps>(({ slideProps }) => ({
  width: '100%',
  height: 550,
  ...(slideProps?.background_color_type === 'color' && {
    backgroundColor: slideProps?.slideBackgroundColor as string,
  }),
  ...(slideProps?.background_color_type === 'gradient' && {
    backgroundImage: `linear-gradient(to bottom right, ${slideProps.gradient_colors?.from_color}, ${slideProps.gradient_colors?.via_color})`,
  }),
}))

const ProductHeroSlider: React.FC<ProductHeroSliderBlockProps> = ({ slides }) => {
  return (
    <SlikSlider slidesToShow={1} arrows={false} dots autoplay>
      {slides?.map((slide) => (
        <StyledProductHeroSliderWrapper key={slide.id} slideProps={slide}>
          <Container maxWidth="lg">
            <ProductHeroSlide {...slide} />
          </Container>
        </StyledProductHeroSliderWrapper>
      ))}
    </SlikSlider>
  )
}
export default ProductHeroSlider
