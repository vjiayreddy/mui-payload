import { TypographyVariantsOptions } from '@mui/material/styles'

export const fontSize = 14
const fw600 = 600
const fw500 = 500
export const typography: TypographyVariantsOptions = {
  fontFamily: 'var(--font-public-sans)',
  body1: {
    fontSize,
  },
  body2: {
    fontSize,
  },
  h1: {
    fontSize: 30,
    fontWeight: fw600,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: 25,
    fontWeight: fw600,
    lineHeight: 1.5,
  },
  h3: {
    fontSize: 20,
    fontWeight: fw600,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: 17,
    fontWeight: fw500,
  },
  h5: {
    fontSize: 16,
    fontWeight: fw500,
    lineHeight: 1,
  },
  h6: {
    fontSize,
    fontWeight: fw500,
  },
}
