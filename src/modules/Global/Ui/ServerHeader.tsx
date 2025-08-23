import { getCachedGlobal } from '@/lib/utils/getGlobals'
import { Header as HeaderType } from '@/payload-types'
import React from 'react'
import Header from './Header'
import ServerCategories from './ServerCategories'

const ServerHeader = async () => {
  const headerData: HeaderType = await getCachedGlobal('header', 4)()
  return <Header data={headerData} categories={<ServerCategories />} />
}

export default ServerHeader
