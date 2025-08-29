import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import useOverflowDetect from '@/hooks/useOverflowDetect'
import { MenuListItem, MenusContainer, Wrapper } from './styled'
import NavLink from '@/components/Shared/Navlink/NavLink-1'
import { Category } from '@/payload-types'

const gridSize = (length: any) => {
  if (length === 1) return 12
  if (length === 2) return 6
  if (length === 3) return 4
  return 3
}
const MegaMenu = ({ title, menuList }: { menuList: Category[]; title: string }) => {
  // get grid size the basis of menu list
  const grid = gridSize(menuList?.length || 0)
  const { elementRef, isLeftOverflowing, isRightOverflowing, checkOverflow } =
    useOverflowDetect<HTMLLIElement>()
  return (
    <Wrapper onMouseOver={checkOverflow}>
      <div className="menu-title">
        {title}
        <KeyboardArrowDown className="icon" />
      </div>

      <MenusContainer
        ref={elementRef}
        className="menu-list"
        left={isLeftOverflowing}
        right={isRightOverflowing}
      >
        <Card className="card" elevation={5}>
          <Grid container>
            {menuList.map((category: any, key: any) => (
              <Grid
                size={{
                  md: grid,
                }}
                key={key}
                className="grid-item"
              >
                {/* {category.map((item: any, i: any) => (
                  <CategoryList category={item} key={item.title + i} />
                ))} */}
              </Grid>
            ))}
          </Grid>
        </Card>
      </MenusContainer>
    </Wrapper>
  )
}
const CategoryList = ({ category: { title, child } }: any) => {
  return (
    <List>
      <Typography
        variant="h6"
        sx={{
          mb: 0.5,
          pl: 4,
        }}
      >
        {title}
      </Typography>

      {child.map((sub: any, i: any) => (
        <NavLink href={sub.url} key={sub.title + i}>
          <MenuListItem>{sub.title}</MenuListItem>
        </NavLink>
      ))}
    </List>
  )
}

export default MegaMenu
