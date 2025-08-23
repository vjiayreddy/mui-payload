import { keyframes, styled } from '@mui/material/styles'
import { Theme } from '@mui/material/styles'

// Define the props that our styled component accepts
interface StyledRootProps {
  componentHeight: number
  fixedOn: number
  fixed: boolean
  theme?: Theme
}

const slideDown = keyframes`
    from {transform: translateY(-200%)}
    to {transform: translateY(0)}
`

// Use type assertion to properly type the styled component
export const StyledRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'componentHeight' && prop !== 'fixed' && prop !== 'fixedOn',
})<StyledRootProps>(({ theme, componentHeight, fixedOn, fixed }) => ({
  paddingTop: fixed ? componentHeight : 0,
  '& .hold': {
    zIndex: 5,
    boxShadow: 'none',
    position: 'relative',
  },
  '& .fixed': {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: 'fixed',
    top: `${fixedOn}px`,
    boxShadow: theme.shadows[5],
    transition: 'all 350ms ease-in-out',
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
}))
