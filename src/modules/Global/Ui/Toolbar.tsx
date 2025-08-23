'use client'

import { JSX, useState } from 'react'

// MUI
import IconButton from '@mui/material/IconButton'

// MUI ICON COMPONENTS
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'

// STYLED COMPONENTS
import { LeftContent, StyledChip, StyledContainer, StyledRoot } from './styles'

// ===========================================

// ===========================================

interface TopbarProps {
  title: string
  label: string
  bgColor?: string
  children?: React.ReactNode
}

export default function Topbar({ title, label, bgColor, children }: TopbarProps) {
  const [expand, setExpand] = useState(false)
  return (
    <StyledRoot bgColor={bgColor} expand={expand}>
      <StyledContainer>
        <LeftContent>
          <div className="tag">
            <StyledChip label={label} size="small" />
            <span className="title">{title}</span>
          </div>

          <IconButton disableRipple className="expand" onClick={() => setExpand((state) => !state)}>
            {expand ? <Remove /> : <Add />}
          </IconButton>
        </LeftContent>

        {children}
      </StyledContainer>
    </StyledRoot>
  )
}
Topbar.Right = function TopbarRight({ children }: { children?: React.ReactNode }): JSX.Element {
  return <div className="topbarRight">{children}</div>
} as React.FC<{ children?: React.ReactNode }>
Topbar.Right.displayName = 'Topbar.Right'
