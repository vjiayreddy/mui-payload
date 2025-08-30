'use client'

import { shouldForwardProp } from '@/lib/utils'
import { keyframes, styled } from '@mui/material/styles'

// CSS ANIMATION NAME
export const slideX = keyframes`
    from { left: 120% }
    to { left: -100% }
`

// STYLED COMPONENTS
export const AdWrapper = styled('div', {
  shouldForwardProp: (prop) =>
    shouldForwardProp<{
      backgroundColor: string
      slideTextColor: string
      slideBoldTextColor: string
    }>(['backgroundColor', 'slideTextColor', 'slideBoldTextColor'], prop),
})<{ backgroundColor: string; slideTextColor: string; slideBoldTextColor: string }>(
  ({
    theme,
    backgroundColor = theme.palette.common.black,
    slideTextColor = '#fff',
    slideBoldTextColor = '#fff',
  }) => ({
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '.5rem',
    backgroundColor,
    '::before': {
      inset: 5,
      zIndex: 3,
      content: "''",
      position: 'absolute',
      border: '1px dashed #fff',
      borderRadius: '.5rem',
    },
    '.text-wrapper': {
      flex: 1,
      zIndex: 5,
      fontSize: 28,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'hidden',
    },
    '.slide-text': {
      letterSpacing: 1.3,
      fontStyle: 'italic',
      position: 'relative',
      whiteSpace: 'nowrap',
      textOverflow: 'hidden',
      textTransform: 'uppercase',
      animation: `${slideX} 30s infinite linear 1s`,
      color: slideTextColor,
    },
    '.slide-text-bold': {
      fontWeight: 700,
      whiteSpace: 'nowrap',
      textOverflow: 'hidden',
      textTransform: 'uppercase',
      color: slideBoldTextColor,
    },
    '.btn-shop': {
      padding: '1.5rem',
      flexShrink: 0,
      zIndex: 5,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }),
)
export const AdTitle1 = styled('h3', {
  shouldForwardProp: (prop) =>
    shouldForwardProp<{ backgroundColor: string; color: string }>(
      ['backgroundColor', 'color'],
      prop,
    ),
})<{ backgroundColor: string; color: string }>(
  ({
    theme,
    backgroundColor = theme.palette.common.white,
    color = theme.palette.common.black,
  }) => ({
    zIndex: 10,
    fontSize: 27,
    padding: '1.5rem',
    position: 'relative',
    textTransform: 'uppercase',
    color: color,
    backgroundColor,
    '::after': {
      bottom: 0,
      zIndex: -1,
      right: -17,
      content: "''",
      position: 'absolute',
      transform: 'rotate(23deg)',
      top: theme.direction === 'rtl' ? -16 : -36,
      border: `70px solid ${backgroundColor}`,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
      '::after': {
        display: 'none',
      },
    },
  }),
)
