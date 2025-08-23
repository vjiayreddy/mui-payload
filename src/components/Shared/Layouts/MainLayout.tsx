'use client'
import React, { Fragment } from 'react'
import Topbar from '@/modules/Global/Ui/Toolbar'
import TopbarSocialLinks from '../Topbar/SocialLinks'
import { TopbarLanguageSelector } from '../Topbar'
import { languageOptions, topbarSocialLinks } from '@/lib/utils/constants'

// const StyledMainLayoutWrapper = styled('main')(({ theme }) => ({
//   paddingTop: Number(theme.mixins.toolbar.minHeight) + 5,
// }))

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      {/* TOP BAR SECTION */}
      <Topbar
        label={'HOT'}
        title="Free Express Shipping
"
      >
        <Topbar.Right>
          <TopbarLanguageSelector languages={languageOptions} />
          <TopbarSocialLinks links={topbarSocialLinks} />
        </Topbar.Right>
      </Topbar>

      {children}
    </Fragment>
  )
}

export default MainLayout
