'use client'

import { styled } from '@mui/material/styles'
export const RootStyle = styled('div')(({ theme }) => ({
  display: 'grid',
  padding: '2rem 0',
  gridTemplateColumns: 'repeat(4, 1fr)',
  [theme.breakpoints.down('md')]: {
    gap: 30,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gap: 30,
    paddingLeft: '2rem',
    paddingRight: '2rem',
    gridTemplateColumns: '1fr',
  },
}))
