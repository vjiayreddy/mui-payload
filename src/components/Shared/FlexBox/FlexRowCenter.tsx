'use client'
import Box from '@mui/material/Box'
import { ReactNode } from 'react'
import { BoxProps } from '@mui/material/Box'

type FlexRowCenterProps = {
  children: ReactNode
} & BoxProps

export default function FlexRowCenter({ children, ...props }: FlexRowCenterProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" {...props}>
      {children}
    </Box>
  )
}
