'use client'
import { createTheme } from '@mui/material/styles'
import { typography } from './typography'
import { components } from './components'
import { palette } from './palette'

const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
  components,
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
})

export default theme
