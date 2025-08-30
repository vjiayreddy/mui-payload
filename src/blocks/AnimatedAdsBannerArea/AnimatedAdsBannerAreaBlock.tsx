import React from 'react'
import { AnimatedAdsBannerAreaBlock as AnimatedAdsBannerAreaBlockProps } from '@/payload-types'
import AdsBannerArea from '@/components/Shared/Animated/AdsBannerArea/AdsBannerArea'

const AnimatedAdsBannerAreaBlock: React.FC<AnimatedAdsBannerAreaBlockProps> = (props) => {
  return <AdsBannerArea {...props} />
}

export default AnimatedAdsBannerAreaBlock
