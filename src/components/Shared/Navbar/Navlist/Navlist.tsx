'use client'
import { NAV_LINK_STYLES } from '../styled'
import CategoryBasedMenu from './CategoryBasedMenu/CategoryBaseMenu'
import { FlexBox } from '../../FlexBox'
import { Category, Page } from '@/payload-types'

// Extended navigation link type that includes properties used in the component
export interface NavigationLink {
  // Properties from Header['navLinks'] type
  linkType?: 'internal' | 'external' | 'categories' | null
  name: string
  url?: string | null
  categories?: (string | Category)[] | null
  newTab?: boolean | null
  id?: string | null
  reference?: {
    relationTo: 'pages'
    value: string | Page
  } | null
}

interface NavigationListProps {
  navLinks: NavigationLink[]
}

const NavigationList = ({ navLinks }: NavigationListProps) => {
  const renderRootLevel = (list: NavigationLink[]) => {
    return list.map((nav: NavigationLink) => {
      // SHOW GRID MEGA MENU
      if (nav.linkType === 'categories') {
        return (
          <CategoryBasedMenu
            key={nav.id}
            title={nav.name}
            menuList={nav.categories as Category[]}
          />
        )
      }

      if (nav.linkType === 'internal') {
        return (
          <FlexBox
            key={nav.id}
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
              {nav.name}
            </FlexBox>
          </FlexBox>
        )
      }
    })
  }
  return <FlexBox gap={4}>{navLinks && renderRootLevel(navLinks)}</FlexBox>
}
export default NavigationList
