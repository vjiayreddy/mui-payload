'use client'
import { JSX, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'

import { LeftContent, StyledChip, StyledContainer, StyledRoot } from './styled'

interface TopbarProps {
  title: string
  label: string
  bgColor?: string
  children?: React.ReactNode
}

const Topbar = ({ title, label, bgColor, children }: TopbarProps) => {
  const [expand, setExpand] = useState(false)
  return (
    <StyledRoot bgColor={bgColor as string} expand={expand}>
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

export const TopbarRight = ({ children }: { children?: React.ReactNode }) => {
  return <div className="topbarRight">{children}</div>
}

export default Topbar
