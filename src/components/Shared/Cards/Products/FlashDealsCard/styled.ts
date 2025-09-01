'use client'

import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
export const StyledCard = styled(Card)(() => ({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 250ms ease-in-out',
  ':hover .hover-box': {
    opacity: 1,
  },
}))
export const ImageWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  height: 250,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
  transition: '0.3s',
  ':hover .thumbnail': {
    scale: 0.9,
  },
  '& .thumbnail': {
    transition: '0.3s',
    objectFit: 'contain',
  },
}))
export const HoverIconWrapper = styled('div')(({ theme }) => ({
  zIndex: 2,
  top: '7px',
  opacity: 0,
  right: '15px',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  color: theme.palette.grey[500],
}))
export const ContentWrapper = styled('div')(({ theme }) => ({
  gap: 8,
  display: 'flex',
  padding: '1rem',

  borderTop: `1px solid ${theme.palette.grey[200]}`,
  '& .title': {
    marginBottom: '.5rem',
  },
  '& > .content': {
    flex: '1 1 0',
    marginInlineEnd: '.5rem',
    width: '100%',
  },
  '& .size': {
    marginBottom: '.5rem',
    color: theme.palette.grey[600],
  },

  // "& .categories": { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }
}))
