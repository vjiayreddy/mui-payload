'use client'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { shouldForwardProp } from '@/lib/utils'
import NavLink from '../Navlink/NavLink-1'

// COMMON STYLED OBJECT
export const NAV_LINK_STYLES = {
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'color 150ms ease-in-out',
  '&:hover': {
    color: 'primary.main',
  },
  '&:last-child': {
    marginRight: 0,
  },
}
export const StyledNavLink = styled(NavLink)({
  ...NAV_LINK_STYLES,
})

export const ParentNav = styled(Box, {
  shouldForwardProp: (prop) => shouldForwardProp<{ active: boolean }>(['active'], prop),
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  ...(active && {
    color: theme.palette.primary.main,
  }),
  '& .arrow': {
    fontSize: '.875rem',
  },
  ':dir(rtl) .arrow': {
    transform: 'rotate(180deg)',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    '& > .parent-nav-item': {
      display: 'block',
    },
  },
}))
export const ParentNavItem = styled('div', {
  shouldForwardProp: (prop) => shouldForwardProp<{ right: boolean }>(['right'], prop),
})<{ right: boolean }>(({ right }) => ({
  top: 0,
  zIndex: 5,
  display: 'none',
  position: 'absolute',
  ...(right
    ? {
        right: '100%',
        paddingRight: 8,
      }
    : {
        left: '100%',
        paddingLeft: 8,
      }),
}))
export const NavBarWrapper = styled(Card, {
  shouldForwardProp: (prop) => shouldForwardProp<{ border: boolean }>(['border'], prop),
})<{ border: boolean }>(({ theme, border }) => ({
  height: '60px',
  display: 'block',
  overflow: 'unset',
  borderRadius: '0px',
  position: 'relative',
  ...(border && {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  }),
  [theme.breakpoints.down(1150)]: {
    display: 'none',
  },
}))
export const InnerContainer = styled(Container, {
  shouldForwardProp: (prop) => shouldForwardProp<{ centered: boolean }>(['centered'], prop),
})<{ centered: boolean }>(({ centered }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: centered ? 'center' : 'space-between',
}))
export const CategoryMenuButton = styled(Button)(({ theme }) => ({
  width: 278,
  backgroundColor: theme.palette.grey[100],
  '.prefix': {
    gap: 8,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[800],
    '.icon': {
      color: theme.palette.primary.main,
    },
  },
  '.dropdown-icon': {
    fontSize: '1rem',
    color: theme.palette.grey[600],
    ...(theme.direction === 'rtl' && {
      rotate: '180deg',
    }),
  },
}))
export const ChildNavListWrapper = styled(Box)({
  zIndex: 5,
  left: '50%',
  top: '100%',
  display: 'none',
  position: 'absolute',
  transform: 'translate(-50%, 0%)',
})
