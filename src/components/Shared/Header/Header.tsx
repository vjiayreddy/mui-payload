/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import clsx from 'clsx'
import LazyImage from '../LazyImage'

//import HeaderCategoryDropdown from './header-category-dropdown'

import { HeaderWrapper, StyledContainer } from './styles'
import { FlexBox } from '../FlexBox'

interface HeaderProps {
  className?: string
  children?: React.ReactNode
  mobileHeader?: any
}

const Header: React.FC<HeaderProps> = ({ className, children, mobileHeader }) => {
  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        <div className="main-header">{children}</div>
        <div className="mobile-header">{mobileHeader}</div>
      </StyledContainer>
    </HeaderWrapper>
  )
}

export const HeaderLeft: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FlexBox minWidth={100} alignItems="center">
      {children}
    </FlexBox>
  )
}

export const HeaderLogo: React.FC<{ url: string }> = ({ url }) => {
  return (
    <HeaderLeft>
      <Link href="/">
        <LazyImage src={url} alt="logo" width={105} height={50} />
      </Link>
    </HeaderLeft>
  )
}

export const HeaderCategoryDropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HeaderLeft>
      {children}
      {/* <HeaderCategoryDropdown>{children}</HeaderCategoryDropdown> */}
    </HeaderLeft>
  )
}

export const HeaderMid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return children
}

export const HeaderRight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>
}
export default Header
