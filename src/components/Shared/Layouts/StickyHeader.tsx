'use client'

import { useCallback, useState } from 'react'
import Header, {
  HeaderLogo,
  HeaderMid,
  HeaderRight,
} from '../Header/Header'
import Sticky from '../Sticky'
import { Header as HeaderType } from '@/payload-types'
import { Box } from '@mui/material'
import NavigationList from '../Navbar/Navlist/Navlist'
import HeaderLogin from '../Header/HeaderLogin'
import HeaderCart from '../Header/HeaderCart'
import { NavigationLink } from '../Navbar/Navlist/Navlist'
import { HeaderSearch, MobileHeader } from '../Header/MobileHeader'
import MobileMenu from '../Navbar/MobileMenu/MobileMenu'

interface StickyHeaderProps {
  headerData: HeaderType
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ headerData }) => {
  const [_isFixed, setIsFixed] = useState(false)
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), [])
  const MOBILE_VERSION_HEADER = (
    <MobileHeader>
      <MobileHeader.Left>
        <MobileMenu navigation={headerData?.navLinks} />
      </MobileHeader.Left>

      <MobileHeader.Logo
        logoUrl={
          typeof headerData?.logo === 'string'
            ? headerData?.logo
            : (headerData?.logo?.url as string)
        }
      />

      <MobileHeader.Right>
        <HeaderSearch>
          <div />
          Search
          {/* <SearchInput /> */}
        </HeaderSearch>

        <HeaderLogin />
        <HeaderCart />
      </MobileHeader.Right>
    </MobileHeader>
  )

  return (
    <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
      <Header mobileHeader={MOBILE_VERSION_HEADER}>
        <HeaderLogo
          url={
            typeof headerData?.logo === 'string'
              ? headerData?.logo
              : (headerData?.logo?.url as string)
          }
        />

        <HeaderMid>
          <Box mr="auto" ml={true ? 'auto' : '2rem'}>
            <NavigationList navLinks={headerData.navLinks as NavigationLink[]} />
          </Box>
        </HeaderMid>

        <HeaderRight>
          <HeaderLogin />
          <HeaderCart />
        </HeaderRight>
      </Header>
    </Sticky>
  )
}
export default StickyHeader
