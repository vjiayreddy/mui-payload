import List from '@mui/material/List'
import Card from '@mui/material/Card'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import { shouldForwardProp } from '@/lib/utils'
const Wrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  transition: 'color 150ms ease-in-out',
  ':hover': {
    color: theme.palette.primary.main,
    '& .menu-list': {
      display: 'block',
    },
  },
  '& .menu-title': {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: theme.spacing(0.3),
    '.icon': {
      fontSize: '1.1rem',
      color: theme.palette.grey[500],
    },
  },
}))
const MenusContainer = styled('div')({
  left: 0,
  zIndex: 2,
  top: '68%',
  width: '100%',
  height: '100%',
  display: 'none',
  minHeight: '500px',
  maxHeight: '500px',
  position: 'absolute',
})
const StyledCard = styled(Card)({
  marginTop: 12,
  height: '100%',
  display: 'flex',
  borderRadius: 0,
  overflow: 'unset',
})
const CategoryList = styled(List)(({ theme }) => ({
  padding: 0,
  width: 300,
  height: '100%',
  borderRight: `1px solid ${theme.palette.grey[200]}`,
}))
const CategoryListItem = styled(ListItem, {
  shouldForwardProp: (prop) => shouldForwardProp<{ active: boolean }>(['active'], prop),
})<{ active: boolean }>(({ theme, active }) => ({
  padding: '1rem 1.5rem',
  transition: 'all 0.3s',
  justifyContent: 'space-between',
  '& .icon': {
    fontSize: '1rem',
  },
  ':dir(rtl) .icon': {
    rotate: '180deg',
  },
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  }),
}))
const SubCategoryList = styled(List)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  //gap: '0.5rem',
}))
const SubCategoryListItem = styled(ListItem)(({ theme }) => ({
  gap: 12,
  fontSize: 13,
  padding: '0',
  alignItems: 'center',
  marginBottom: '0.5rem',
  transition: 'all 0.3s',
  ':hover': {
    color: theme.palette.primary.main,
  },
  '& .sub-item-avatar': {
    borderRadius: '4px',
    backgroundColor: theme.palette.grey[100],
  },
}))
export {
  Wrapper,
  StyledCard,
  CategoryList,
  MenusContainer,
  SubCategoryList,
  CategoryListItem,
  SubCategoryListItem,
}
