import NavbarDropdown from './NavbarDropdown'
import { NavBarWrapper, InnerContainer } from './styled'

const Navbar = ({ elevation = 2, border = 0, categories, navigation }: any) => {
  return (
    <NavBarWrapper elevation={elevation} border={border}>
      <InnerContainer centered={!categories}>
        {categories ? <NavbarDropdown>{categories}</NavbarDropdown> : null}
        {navigation}
      </InnerContainer>
    </NavBarWrapper>
  )
}

export default Navbar
