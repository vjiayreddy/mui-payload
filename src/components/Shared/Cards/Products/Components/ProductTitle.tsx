import Link from 'next/link'
import Typography from '@mui/material/Typography'

export default function ProductTitle({ title, slug }: { title: string; slug: string }) {
  return (
    <Link href={`/products/${slug}`}>
      <Typography noWrap variant="h6" className="title" color="textSecondary">
        {title}
      </Typography>
    </Link>
  )
}
