import React from 'react'
import { ProductHeroSliderBlock as ProductHeroSliderBlockProps } from '@/payload-types'
import ProductHeroSlider from '@/components/Shared/ProductHeroSlider'

const ProductHeroSliderBlock: React.FC<ProductHeroSliderBlockProps> = (props) => {
  return <ProductHeroSlider {...props} />
}

export default ProductHeroSliderBlock
