import { usePathname } from 'next/navigation'

// MUI
import Card from '@mui/material/Card'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// ICON COMPONENTS

// GLOBAL CUSTOM HOOKS
import useOverflowDetect from '@/hooks/useOverflowDetect'

// STYLED COMPONENTS
import { ParentNav, ParentNavItem } from '../styled'
import ChevronRight from '../../Icons/ChevronRight'

// DATA TYPES

// ==============================================================

// ==============================================================

const NavItemChild = ({ nav, children }: any) => {
  const pathname = usePathname()
  const { checkOverflow, elementRef, isRightOverflowing: _isRightOverflowing } = useOverflowDetect<HTMLDivElement>()
  const isActive = nav.child.flat().find((item: any) => item.url === pathname)
  return (
    <ParentNav minWidth={200} active={isActive ? true : false} onMouseEnter={checkOverflow}>
      <MenuItem color="grey.700">
        <Typography
          component="span"
          sx={{
            flex: '1 1 0',
          }}
        >
          {nav.title}
        </Typography>

        <ChevronRight className="arrow" />
      </MenuItem>

      <ParentNavItem ref={elementRef} right={_isRightOverflowing} className="parent-nav-item">
        <Card
          elevation={5}
          sx={{
            py: '0.5rem',
            minWidth: 180,
            overflow: 'unset',
          }}
        >
          {children}
        </Card>
      </ParentNavItem>
    </ParentNav>
  )
}
export default NavItemChild
