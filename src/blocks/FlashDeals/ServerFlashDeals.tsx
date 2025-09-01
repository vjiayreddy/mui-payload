import React from 'react'
import { FlashDealsBlock as FlashDealsBlockProps } from '@/payload-types'
import FlashDeals from './FlashDeals'

const FlashDealsBlock: React.FC<FlashDealsBlockProps> = (props) => {
  return <FlashDeals {...props} />
}
export default FlashDealsBlock
