import Link from 'next/link'
import Typography from '@mui/material/Typography'

const NavLink2 = ({
  url,
  color,
  title = 'SHOP NOW',
  borderColor = 'primary.600',
}: {
  url: string
  color: string
  title?: string
  borderColor?: string
}) => {
  return (
    <Link href={url}>
      <Typography
        variant="body1"
        sx={{
          borderBottom: '2px solid',
          display: 'inline',
          fontWeight: 600,
          borderColor,
          color,
        }}
      >
        {title}
      </Typography>
    </Link>
  )
}

export default NavLink2
