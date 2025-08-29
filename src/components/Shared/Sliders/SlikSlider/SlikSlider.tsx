'use client'

import { ReactNode, Ref } from 'react'
import { SxProps, Theme } from '@mui/material'
import SlickCarousel, { Settings } from 'react-slick'
import { useTheme } from '@mui/material/styles'
import CarouselDots from './Components/Dots'
import { NextArrow, PrevArrow } from './Components/Arrows'
import { RootStyle } from './styled'

// ==============================================================

// ==============================================================

export interface CarouselProps extends Omit<Settings, 'dots' | 'arrows' | 'slidesToShow'> {
  ref?: Ref<SlickCarousel> | undefined
  dotColor?: string
  children: ReactNode
  arrowStyles?: SxProps<Theme>
  dots?: boolean
  arrows?: boolean
  slidesToShow?: number
  spaceBetween?: number | string
  dotStyles?: SxProps<Theme>
}
const SlikSlider = ({
  ref,
  dotColor,
  children,
  arrowStyles,
  dots = false,
  arrows = true,
  slidesToShow = 4,
  spaceBetween = 0,
  dotStyles = {
    mt: 4,
  },
  ...others
}: CarouselProps) => {
  const theme = useTheme()
  const settings = {
    dots,
    arrows,
    slidesToShow,
    rtl: theme.direction === 'rtl',
    nextArrow: <NextArrow sx={arrowStyles} />,
    prevArrow: <PrevArrow sx={arrowStyles} />,
    ...CarouselDots({
      dotColor,
      sx: dotStyles,
    }),
    ...others,
  }
  return (
    <RootStyle space={spaceBetween as number}>
      <SlickCarousel ref={ref} {...settings}>
        {children}
      </SlickCarousel>
    </RootStyle>
  )
}
export default SlikSlider
