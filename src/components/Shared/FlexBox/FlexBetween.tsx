'use client'
import { ReactNode } from 'react'
import Box from '@mui/material/Box'

interface FlexBetweenProps extends React.ComponentProps<typeof Box> {
  children?: ReactNode
}

export default function FlexBetween({ children, ...props }: FlexBetweenProps) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" {...props}>
      {children}
    </Box>
  )
}
