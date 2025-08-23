'use client'

import Card from '@mui/material/Card'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { NAV_LINK_STYLES, ChildNavListWrapper } from '../styled'
import NavItemChild from './NavItem'
import NavLink from '../../Navlink/NavLink-1'
import MegaMenu from './MegaMenu'
import CategoryBasedMenu from './CategoryBasedMenu/CategoryBaseMenu'
import { FlexBox } from '../../FlexBox'

const NavigationList = ({ navigation }: any) => {
  const renderNestLevel = (children: any) => {
    return children.map((nav: any) => {
      if (nav.child) {
        return (
          <NavItemChild nav={nav} key={nav.title}>
            {renderNestLevel(nav.child)}
          </NavItemChild>
        )
      }
      return (
        <NavLink href={nav.url} key={nav.title}>
          <MenuItem>{nav.title}</MenuItem>
        </NavLink>
      )
    })
  }
  const renderRootLevel = (list: any) => {
    return list.map((nav: any) => {
      // SHOW GRID MEGA MENU
      if (nav.megaMenu) {
        return <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
      }

      // SHOW CATEGORY BASED MEGA MENU WITH SUB ITEMS
      if (nav.megaMenuWithSub) {
        return <CategoryBasedMenu key={nav.title} title={nav.title} menuList={nav.child} />
      }

      // SHOW LIST MENU WITH CHILD
      if (nav.child && nav.megaMenu === false && nav.megaMenuWithSub === false) {
        return (
          <FlexBox
            key={nav.title}
            alignItems="center"
            position="relative"
            flexDirection="column"
            sx={{
              '&:hover': {
                '& > .child-nav-item': {
                  display: 'block',
                },
              },
            }}
          >
            <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
              {nav.title}{' '}
              <KeyboardArrowDown
                sx={{
                  color: 'grey.500',
                  fontSize: '1.1rem',
                }}
              />
            </FlexBox>

            <ChildNavListWrapper className="child-nav-item">
              <Card
                elevation={5}
                sx={{
                  mt: 2.5,
                  py: 1,
                  minWidth: 100,
                  overflow: 'unset',
                }}
              >
                {renderNestLevel(nav.child)}
              </Card>
            </ChildNavListWrapper>
          </FlexBox>
        )
      }
    })
  }
  return <FlexBox gap={4}>{renderRootLevel(navigation)}</FlexBox>
}
export default NavigationList
