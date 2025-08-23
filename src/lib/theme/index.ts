'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'var(--mui-appbar-color-default)',
          color: 'var(--color-text)',
          border: '1px solid var(--mui-appbar-border-color-default)',
        },
      },
    },
  },
})

export default theme
