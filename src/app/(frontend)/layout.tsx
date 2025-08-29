import React from 'react'
import './styles.css'
import { Public_Sans } from 'next/font/google'
import { TRPCReactProvider } from '@/trpc/client'
import MuiThemeProvider from '@/theme/ThemProvider'
import ServerMainlayout from '@/components/Shared/Layouts/ServerMainlayout'
import 'overlayscrollbars/overlayscrollbars.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-public-sans',
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
    <html lang="en" className={`${publicSans.className}`} suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
          <MuiThemeProvider>
            <ServerMainlayout>{children}</ServerMainlayout>
          </MuiThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
