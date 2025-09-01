import { FlexBox } from '@/components/Shared/FlexBox'
import { calculateDiscount, currency } from '@/lib/utils'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function ProductPrice({ discount, price }: { discount: number; price: number }) {
  return (
    <FlexBox alignItems="center" gap={1} mt={0.5}>
      <Typography
        color="primary"
        sx={{
          fontWeight: 600,
        }}
      >
        {calculateDiscount(price, discount)}
      </Typography>

      {discount ? (
        <Box component="del" fontSize={12} fontWeight={500} color="grey.600">
          {currency(price)}
        </Box>
      ) : null}
    </FlexBox>
  )
}
