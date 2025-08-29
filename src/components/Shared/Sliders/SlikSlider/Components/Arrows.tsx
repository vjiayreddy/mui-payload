'use client'
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight'

// STYLED COMPONENT
import { ArrowButton } from './styled'
import { SxProps, Theme } from '@mui/material'

interface ArrowProps {
  onClick?: () => void
  sx?: SxProps<Theme>
  className?: string
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick, sx, className = '' }) => {
  const updatedClassName = className
    .split(' ')
    .filter((item) => item !== 'slick-next')
    .join(' ')

  return (
    <ArrowButton onClick={onClick} className={`next ${updatedClassName}`} sx={sx}>
      <KeyboardDoubleArrowRight fontSize="small" color="inherit" className="forward-icon" />
    </ArrowButton>
  )
}

export const PrevArrow: React.FC<ArrowProps> = ({ onClick, sx, className = '' }) => {
  const updatedClassName = className
    .split(' ')
    .filter((item) => item !== 'slick-prev')
    .join(' ')

  return (
    <ArrowButton onClick={onClick} className={`prev ${updatedClassName}`} sx={sx}>
      <KeyboardDoubleArrowLeft fontSize="small" color="inherit" className="back-icon" />
    </ArrowButton>
  )
}
