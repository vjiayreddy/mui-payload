// STYLED COMPONENT
'use client'
import { StyledScrollbar } from './styled'

const OverlayScrollbar = ({ sx, children, className }: any) => {
  return (
    <StyledScrollbar
      defer
      sx={sx}
      className={className}
      options={{
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 100,
        },
      }}
    >
      {children}
    </StyledScrollbar>
  )
}
export default OverlayScrollbar
