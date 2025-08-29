import { BestSellingItems } from '@/blocks/best-selling-items/config'
import { CallToAction } from '@/blocks/call-to-action/config'
import { HeroFeaturedProducts } from '@/blocks/hero-featured-products/config'
import { ProductHeroSlider } from '@/blocks/ProductHeroSlider/config'
import { ServiceGuarantees } from '@/blocks/ServiceGuarantees/config'
import { Block } from 'payload'

export const pagesBlocks: Block[] = [
  CallToAction,
  BestSellingItems,
  HeroFeaturedProducts,
  ProductHeroSlider,
  ServiceGuarantees,
]
