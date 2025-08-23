import React from 'react'
import { getCachedGlobal } from '@/lib/utils/getGlobals'
import { Header as HeaderType } from '@/payload-types'
import Topbar, { TopbarRight } from '../Topbar/Topbar'
import TopbarLanguageSelector from '../Topbar/LanguageSelector'
import TopbarSocialLinks from '../Topbar/SocialLinks'
import { languageOptions, topbarSocialLinks } from '@/lib/utils/constants'
import StickyHeader from './StickyHeader'

interface ServerMainlayoutProps {
  children: React.ReactNode
}

const ServerMainlayout: React.FC<ServerMainlayoutProps> = async ({ children }) => {
  const headerData: HeaderType = await getCachedGlobal('header', 4)()
  return (
    <>
      {headerData.topInfoBar?.isVisible && (
        <Topbar
          label={headerData?.topInfoBar?.tapBarStatus as string}
          title={headerData?.topInfoBar?.topBarTitle as string}
        >
          <TopbarRight>
            <TopbarLanguageSelector languages={languageOptions} />
            <TopbarSocialLinks links={topbarSocialLinks} />
          </TopbarRight>
        </Topbar>
      )}
      <StickyHeader headerData={headerData} />
      {children}
    </>
  )
}

export default ServerMainlayout
