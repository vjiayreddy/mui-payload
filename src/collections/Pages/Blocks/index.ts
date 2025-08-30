import { Block } from 'payload'
import { BestSellingItems } from '@/blocks/best-selling-items/config'
import { CallToAction } from '@/blocks/call-to-action/config'
import { HeroFeaturedProducts } from '@/blocks/hero-featured-products/config'
import { ProductCategorySelector } from '@/blocks/ProductCategorySelector/config'
import { ProductHeroSlider } from '@/blocks/ProductHeroSlider/config'
import { ServiceGuarantees } from '@/blocks/ServiceGuarantees/config'
import { AnimatedAdsBannerArea } from '@/blocks/AnimatedAdsBannerArea/config'

export const pagesBlocks: Block[] = [
  CallToAction,
  BestSellingItems,
  HeroFeaturedProducts,
  ProductHeroSlider,
  ServiceGuarantees,
  ProductCategorySelector,
  AnimatedAdsBannerArea,
]
