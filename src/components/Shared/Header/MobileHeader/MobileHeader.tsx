'use client'
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { FlexBetween, FlexBox } from '../../FlexBox'

// GLOBAL CUSTOM COMPONENTS
export default function MobileHeader({ children }: { children: React.ReactNode }) {
  return <FlexBetween width="100%">{children}</FlexBetween>
}
MobileHeader.Left = ({ children }: { children: React.ReactNode }) => {
  return <Box mr={2}>{children}</Box>
}
MobileHeader.Logo = ({ logoUrl }: { logoUrl: string }) => {
  return (
    <Link href="/">
      <Image width={130} height={44} src={logoUrl} alt="logo" />
    </Link>
  )
}
MobileHeader.Right = ({ children }: { children: React.ReactNode }) => {
  return (
    <FlexBox justifyContent="end" flex={1}>
      {children}
    </FlexBox>
  )
}
