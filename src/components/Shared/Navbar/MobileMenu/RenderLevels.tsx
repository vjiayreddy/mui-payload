import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import NavLink from '../../Navlink/NavLink-1'
import { Category, Header } from '@/payload-types'

// GLOBAL CUSTOM COMPONENTS
const ACCORDION_STYLES = {
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}
const ACCORDION_SUMMARY_STYLES = {
  padding: 0,
  minHeight: 48,
  boxShadow: 'none',
  '& .Mui-expanded': {
    color: 'primary.main',
    margin: 0,
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    margin: 0,
    '& .MuiSvgIcon-root': {
      color: 'primary.main',
    },
  },
}

type navLink = NonNullable<Header['navLinks']>[number]

interface RenderLevelsProps {
  data: navLink[]
  handleClose: () => void
}

export const renderLevels = ({ data, handleClose }: RenderLevelsProps) => {
  return data.map((item: navLink, index: number) => {
    if (item.linkType === 'categories') {
      return (
        <Accordion square key={index} elevation={0} disableGutters sx={ACCORDION_STYLES}>
          <AccordionSummary expandIcon={<ExpandMore />} sx={ACCORDION_SUMMARY_STYLES}>
            <Typography variant="h6">{item.name}</Typography>
          </AccordionSummary>

          <Box mx={2}>
            {renderLevels({
              data: item.categories as Category[],
              handleClose,
            })}
          </Box>
        </Accordion>
      )
    }
    if (item.linkType === 'external') {
      return (
        <Typography
          variant="h6"
          sx={{
            py: 1,
          }}
          key={index}
        >
          <NavLink href={'#'}>{item.name}</NavLink>
        </Typography>
      )
    }
    return (
      <Box key={index} py={1}>
        <NavLink href={'#'} onClick={handleClose}>
          {item.name}
        </NavLink>
      </Box>
    )
  })
}
