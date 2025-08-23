'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import { shouldForwardProp } from '@/lib/utils'

// STYLED COMPONENT
const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => shouldForwardProp<{ active: boolean }>(['active'], prop),
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  transition: 'color 150ms ease-in-out',
  color: active ? theme.palette.primary.main : 'inherit',
  '&:hover': {
    color: `${theme.palette.primary.main} !important`,
  },
}))

// ==============================================================

// ==============================================================
const NavLink: React.FC<{
  href: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}> = ({ href, children, style, className, ...props }) => {
  const pathname = usePathname()

  // CHECK CURRENT ROUTE
  const isActive = () => {
    if (href === '/') return pathname === href
    return pathname.includes(href)
  }
  return (
    <StyledLink
      href={href}
      style={style}
      className={clsx(className)}
      active={isActive() ? true : false}
      {...props}
    >
      {children}
    </StyledLink>
  )
}

export default NavLink
