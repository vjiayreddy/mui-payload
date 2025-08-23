'use client'

import Typography from '@mui/material/Typography'
import { CategoryMenuButton } from './styled'
import Category from '../Icons/Category'
import { ChevronRight } from '@mui/icons-material'
import CategoryMenu from '../Categories/CategoriesMenu'
const NavbarDropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CategoryMenu
      render={(handler: any) => (
        <CategoryMenuButton variant="text" onClick={(e) => handler(e)}>
          <div className="prefix">
            <Category fontSize="small" className="icon" />
            <Typography variant="h6">Categories</Typography>
          </div>

          <ChevronRight className="dropdown-icon" fontSize="small" />
        </CategoryMenuButton>
      )}
    >
      {children}
    </CategoryMenu>
  )
}
export default NavbarDropdown
