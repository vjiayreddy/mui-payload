'use client'
import Link from 'next/link'

// MUI
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'

// GLOBAL CUSTOM HOOK
export default function HeaderCart() {
  return (
    <Badge badgeContent={1} color="primary">
      <IconButton LinkComponent={Link} href="/mini-cart">
        <ShoppingBagOutlined
          sx={{
            color: 'grey.600',
          }}
        />
      </IconButton>
    </Badge>
  )
}
