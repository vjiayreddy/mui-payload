import React from 'react'
import './styles.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Mona_Sans, Public_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import { TRPCReactProvider } from '@/trpc/client'
import ServerHeader from '@/modules/Global/Ui/ServerHeader'
import MainLayout from '@/components/Shared/Layouts/MainLayout'
import MuiThemeProvider from '@/theme/ThemProvider'
import ServerMainlayout from '@/components/Shared/Layouts/ServerMainlayout'

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-public-sans',
})

const roboto = Mona_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Cartwale - Your Shopping Destination',
  description:
    'Discover the best deals and products at Cartwale, your one-stop shopping destination.',
  keywords: 'cartwale, shopping, e-commerce, nextjs, payload',
  authors: [{ name: 'Vijay Kumar', url: 'https://github.com /vijaykumar' }],
  creator: 'Vijay Kumar',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${publicSans.className}`}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>
          <MuiThemeProvider>
            {/* <ServerHeader /> */}
            <ServerMainlayout>{children}</ServerMainlayout>
          </MuiThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
