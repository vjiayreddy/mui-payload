'use client'

import { styled } from '@mui/material/styles'

// STYLED COMPONENTS
export const Wrapper = styled('div')(({ theme }) => ({
  height: '180px',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: 12,
  padding: 8,
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  img: {
    height: '100%',
    objectFit: 'contain',
    transition: 'all 0.3s',
    objectPosition: 'center center',
  },
  ':hover': {
    img: {
      transform: 'scale(1.1)',
    },
    backgroundColor: theme.palette.primary,
  },
}))

export const CategoryTitleWrapper = styled('div')(({ theme }) => ({
  '.category-title': {
    borderRadius: 5,
  },
  ':hover': {
    '.category-title': {
      color: theme.palette.primary.main,
    },
  },
}))

export const CategoryTitle = styled('div')(() => ({
  marginTop: 10,
  textAlign: 'center',
  borderRadius: '2px',
  // position: 'absolute',
  transition: 'all 0.3s',
  // backgroundColor: theme.palette.grey[50],
  p: {
    fontSize: 16,
    fontWeight: 500,
  },
}))
