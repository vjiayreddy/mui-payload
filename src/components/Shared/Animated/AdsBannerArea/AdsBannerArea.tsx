'use client'
import { Button, Container, Grid } from '@mui/material'
import { AdTitle1, AdWrapper } from './styled'
import { AnimatedAdsBannerAreaBlock } from '@/payload-types'

const AdsBannerArea: React.FC<AnimatedAdsBannerAreaBlock> = (props) => {
  return (
    <Container maxWidth="xl" className="pt-10">
      <AdWrapper
        backgroundColor={props.Customization?.animatedSectionBgColor as string}
        slideTextColor={props.Customization?.titleNormalColor as string}
        slideBoldTextColor={props.Customization?.titleBoldColor as string}
      >
        <AdTitle1
          backgroundColor={props.Customization?.sectionBgColor as string}
          color={props.Customization?.headingColor as string}
        >
          {props.Content.heading}
        </AdTitle1>

        <p className="text-wrapper">
          <span className="slide-text">
            {props.Content.titleNormal}{' '}
            <span className="slide-text-bold"> {props.Content.titleBold}</span>
          </span>
        </p>

        <div className="btn-shop">
          <Button color="primary" variant="contained">
            Shop Now
          </Button>
        </div>
      </AdWrapper>
    </Container>
  )
}

export default AdsBannerArea
