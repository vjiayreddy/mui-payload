/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { shouldForwardProp } from '@/lib/utils'
import { styled } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

interface StyledMenuRootProps {
  open: boolean
}

const StyledMenuRoot = styled('div', {
  shouldForwardProp: (prop) => shouldForwardProp<StyledMenuRootProps>(['open'], prop),
})<StyledMenuRootProps>(({ open, theme: { direction } }) => ({
  cursor: 'pointer',
  position: 'relative',
  '& .dropdown-icon': {
    transition: 'all 250ms ease-in-out',
    transform: `rotate(${open ? (direction === 'rtl' ? '-90deg' : '90deg') : '0deg'})`,
  },
  '& .categories': {
    zIndex: 100,
    position: 'relative',
    transition: 'all 250ms ease-in-out',
    transform: open ? 'scaleY(1)' : 'scaleY(0)',
  },
}))

interface CategoryMenuProps {
  children: React.ReactNode
  render: any
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ render, children }) => {
  const [open, setOpen] = useState(false)
  const handleToggleMenu = (e: any) => {
    e.stopPropagation()
    setOpen((open) => !open)
  }
  const handleCloseMenu = useCallback(() => setOpen(false), [])
  useEffect(() => {
    window.addEventListener('click', handleCloseMenu)
    window.addEventListener('scroll', handleCloseMenu)
    return () => {
      window.removeEventListener('click', handleCloseMenu)
      window.removeEventListener('scroll', handleCloseMenu)
    }
  }, [handleCloseMenu])
  return (
    <StyledMenuRoot open={open}>
      {render(handleToggleMenu)}
      <div className="categories">{children}</div>
    </StyledMenuRoot>
  )
}

export default CategoryMenu
