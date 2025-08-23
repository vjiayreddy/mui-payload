/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Button from '@mui/material/Button'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { FlexBox } from '../FlexBox'
import CategoryIcon from '../Icons/Category'
import CategoryMenu from '../Categories/CategoriesMenu'

interface HeaderCategoryDropdownProps {
  children: React.ReactNode
}

const HeaderCategoryDropdown: React.FC<HeaderCategoryDropdownProps> = ({ children }) => {
  return (
    <CategoryMenu
      render={(handler: any) => (
        <FlexBox color="grey.600" alignItems="center" marginInlineStart={2}>
          <Button color="inherit" onClick={(e) => handler(e)}>
            <CategoryIcon fontSize="small" color="inherit" />
            <KeyboardArrowDown fontSize="small" color="inherit" />
          </Button>
        </FlexBox>
      )}
    >
      {children}
    </CategoryMenu>
  )
}

export default HeaderCategoryDropdown
