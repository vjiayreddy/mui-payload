import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// MUI
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

import {
  Wrapper,
  StyledCard,
  CategoryList,
  MenusContainer,
  SubCategoryList,
  CategoryListItem,
  SubCategoryListItem,
} from './styled'
import { ChevronRight } from '@mui/icons-material'
import OverlayScrollbar from '@/components/Shared/OverlayScrollbar/scrollbar'
import { Category } from '@/payload-types'
import { Grid } from '@mui/material'

interface CategoryBasedMenuProps {
  title: string
  menuList: Category[]
}

const CategoryBasedMenu = ({ title, menuList }: CategoryBasedMenuProps) => {
  const [selected, setSelected] = useState(menuList[0].name)
  const list = menuList.reduce((prev: any, curr: any) => [...prev, curr.name], [])
  const _childList = menuList.find((item: any) => item.name === selected)
  return (
    <Wrapper>
      <div className="menu-title">
        {title} <KeyboardArrowDown className="icon" />
      </div>

      <MenusContainer className="menu-list">
        <StyledCard>
          {/* MAIN CATEGORIES SECTION */}
          <CategoryList>
            {list.map((name: any) => (
              <CategoryListItem
                key={name}
                active={selected === name}
                onMouseEnter={() => setSelected(name)}
              >
                <span>{name}</span>
                <ChevronRight fontSize="small" className="icon" />
              </CategoryListItem>
            ))}
          </CategoryList>

          {/* SUB / CHILD CATEGORIES SECTION */}
          <SubChildList subChildren={_childList} />
        </StyledCard>
      </MenusContainer>
    </Wrapper>
  )
}

const SubChildList = ({ subChildren }: any) => {
  return (
    <OverlayScrollbar
      sx={{
        width: '100%',
      }}
    >
      <Box px={6} py={2} height="100%">
        <Grid container>
          {subChildren.subcategories.map((item: any) => (
            <Grid key={item.id} size={{ md: 3, xs: 6, sm: 4, lg: 3, xl: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  my: 3,
                }}
              >
                {item?.subcategory?.name}
              </Typography>
              <SubCategoryList>
                {item?.subcategory?.subcategories?.map((sub: any) => (
                  <SubChildItem item={sub} key={sub.id} />
                ))}
              </SubCategoryList>
            </Grid>
          ))}
        </Grid>
      </Box>
    </OverlayScrollbar>
  )
}

const SubChildItem = ({ item }: any) => {
  const { subcategory, url = '/', _icon, img } = item
  return (
    <Link href={url}>
      <SubCategoryListItem>
        {img ? (
          <Avatar className="sub-item-avatar">
            <Image alt={subcategory.name} src={img} fill sizes="(max-width: 768px) 100vw, 100vw" />
          </Avatar>
        ) : null}
        {subcategory?.name}
      </SubCategoryListItem>
    </Link>
  )
}

export default CategoryBasedMenu
