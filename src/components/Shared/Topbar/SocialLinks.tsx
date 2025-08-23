// MUI ICON COMPONENTS
import { FlexBox } from '../FlexBox'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'

type SocialLinksProps = {
  links: {
    twitter?: string
    facebook?: string
    instagram?: string
  }
}

export default function TopbarSocialLinks({ links }: SocialLinksProps) {
  const { twitter, facebook, instagram } = links
  return (
    <FlexBox alignItems="center" gap={1.5}>
      {twitter ? <LinkItem Icon={Twitter} url={twitter} /> : null}
      {facebook ? <LinkItem Icon={Facebook} url={facebook} /> : null}
      {instagram ? <LinkItem Icon={Instagram} url={instagram} /> : null}
    </FlexBox>
  )
}
import { SvgIconComponent } from '@mui/icons-material'

function LinkItem({ Icon, url }: { Icon: SvgIconComponent; url: string }) {
  return (
    <a href={url} target="_blank">
      <Icon
        sx={{
          fontSize: 16,
        }}
      />
    </a>
  )
}
