import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SectionHeader from './SectionHeader'

const SectionCreator = (props: any) => {
  const { icon, title, children, seeMoreLink, ...others } = props
  return (
    <Box mb={7.5} {...others}>
      <Container maxWidth="xl" className="py-10">
        {title ? <SectionHeader title={title} seeMoreLink={seeMoreLink} icon={icon} /> : null}
        {children}
      </Container>
    </Box>
  )
}
export default SectionCreator
