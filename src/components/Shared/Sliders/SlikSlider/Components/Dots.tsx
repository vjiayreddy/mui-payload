'use client'
import { SxProps, Theme } from '@mui/material'
import { Dot, DotList } from './styled'

interface CarouselDotsProps {
  dotColor?: string
  sx?: SxProps<Theme>
}

export default function CarouselDots({ dotColor, sx }: CarouselDotsProps) {
  return {
    appendDots: (dots: React.ReactNode) => <DotList sx={sx}>{dots}</DotList>,
    customPaging: () => <Dot dotColor={dotColor as string} />,
  }
}
