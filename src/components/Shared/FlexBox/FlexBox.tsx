'use client'
import Box from '@mui/material/Box'
import { ReactNode } from 'react'

interface FlexBoxProps extends React.ComponentProps<typeof Box> {
  children?: ReactNode
}

export default function FlexBox({ children, ...props }: FlexBoxProps) {
  return (
    <Box display="flex" {...props}>
      {children}
    </Box>
  )
}
