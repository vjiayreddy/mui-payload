'use client'

import Link from 'next/link'
import Typography from '@mui/material/Typography'

// MUI ICON COMPONENTS
import ArrowLeft from '@mui/icons-material/ArrowLeft'
// import ArrowRight from '@mui/icons-material/ArrowRight'

// LOCAL CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from '../FlexBox'

// GLOBAL CUSTOM HOOK

// ===================================================

// ===================================================

const SectionHeader = ({ title, seeMoreLink, icon }: any) => {
  return (
    <FlexBetween mb={3}>
      <FlexBox alignItems="center" gap={1}>
        {icon ?? null}
        <Typography variant="h2">{title}</Typography>
      </FlexBox>

      {seeMoreLink ? (
        <Link href={seeMoreLink}>
          <FlexBox alignItems="end" color="grey.600">
            View All <ArrowLeft fontSize="small" color="inherit" />
            {/* View all
            {settings.direction === 'ltr' ? (
              <ArrowRight fontSize="small" color="inherit" />
            ) : (
              
            )} */}
          </FlexBox>
        </Link>
      ) : null}
    </FlexBetween>
  )
}
export default SectionHeader
