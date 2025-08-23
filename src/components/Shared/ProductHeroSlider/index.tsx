'use client'
import React from 'react'
import { Box, styled } from '@mui/material'
import { cn, shouldForwardProp } from '@/lib/utils'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import ProductHeroSlide, { ProductHeroSlideType } from './Slide'
import { ProductHeroSliderBlock as ProductHeroSliderBlockProps } from '@/payload-types'

interface StyledProductHeroSliderWrapperProps {
  component?: React.ElementType
  slideProps?: ProductHeroSlideType
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
    <Swiper modules={[Autoplay]} autoplay={{ delay: 10000000 }} loop={true} className="h-full">
      {slides?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <StyledProductHeroSliderWrapper
            id="product-hero-slider"
            component="div"
            slideProps={slide}
            className={cn('w-full relative')}
          >
            <ProductHeroSlide slideType={slide} />
          </StyledProductHeroSliderWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductHeroSlider
