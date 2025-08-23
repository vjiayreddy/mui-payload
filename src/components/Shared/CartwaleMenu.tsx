import { Fragment, useState } from 'react'
import Menu from '@mui/material/Menu'

interface BazaarMenuProps {
  open?: boolean
  sx?: object
  handler?: (onClick: (event: React.MouseEvent<HTMLElement>) => void) => React.ReactNode
  options: (onClose: () => void) => React.ReactNode
  direction?: 'left' | 'right'
}

export default function CartwaleMenu({
  open,
  sx,
  handler,
  options,
  direction = 'left',
}: BazaarMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const handleClose = () => setAnchorEl(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  return (
    <Fragment>
      {handler ? handler(handleClick) : null}

      <Menu
        sx={sx}
        elevation={1}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open !== undefined ? open : !!anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction,
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              boxShadow: 5,
              minWidth: 180,
              borderRadius: 2,
            },
          },
        }}
      >
        {options(handleClose)}
      </Menu>
    </Fragment>
  )
}
