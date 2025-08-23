'use client'

import { useCallback, useState } from 'react'
import Header, {
  HeaderCategoryDropdown,
  HeaderLogo,
  HeaderMid,
  HeaderRight,
} from '../Header/Header'
import Sticky from '../Sticky'
import { Header as HeaderType } from '@/payload-types'
import { Box } from '@mui/material'
import NavigationList from '../Navbar/Navlist/Navlist'
import { navbarNavigation } from '@/lib/utils/constants'
import HeaderLogin from '../Header/HeaderLogin'
import HeaderCart from '../Header/HeaderCart'

interface StickyHeaderProps {
  headerData: HeaderType
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ headerData }) => {
  const [isFixed, setIsFixed] = useState(false)
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), [])
  const MOBILE_VERSION_HEADER = (
    <div />
    // <MobileHeader>
    //   <MobileHeader.Left>
    //     <MobileMenu navigation={header.navigation} />
    //   </MobileHeader.Left>

    //   <MobileHeader.Logo logoUrl={mobileNavigation.logo} />

    //   <MobileHeader.Right>
    //     <HeaderSearch>
    //       <SearchInput />
    //     </HeaderSearch>

    //     <HeaderLogin />
    //     <HeaderCart />
    //   </MobileHeader.Right>
    // </MobileHeader>
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
            <NavigationList navigation={navbarNavigation} />
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
