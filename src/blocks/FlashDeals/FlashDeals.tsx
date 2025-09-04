'use client'
import SectionCreator from '@/components/Shared/Sections/SectionCreator'
import React from 'react'
import { Icon } from '@iconify/react'
import { SlikSlider } from '@/components/Shared/Sliders/SlikSlider'
import { Box } from '@mui/material'
import FlashDealCard from '@/components/Shared/Cards/Products/FlashDealsCard/FlashDealsCard'
import { FlashDealsBlock, Product } from '@/payload-types'

const FlashDeals: React.FC<FlashDealsBlock> = ({ iconName, sectionHeading, products }) => {
  const bestProducts = products as Product[]
  const responsive = [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 959,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ]

  return (
    <SectionCreator icon={iconName ? <Icon icon={iconName} /> : null} title={sectionHeading}>
      <SlikSlider responsive={responsive}>
        {bestProducts?.map((product) => (
          <Box p={1} key={product.id}>
            <FlashDealCard product={product} />
          </Box>
        ))}
      </SlikSlider>
    </SectionCreator>
  )
}
export default FlashDeals
