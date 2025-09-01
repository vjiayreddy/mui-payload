'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import Add from '@mui/icons-material/Add'

//import useCart from "hooks/useCart";

export default function AddToCart({ product }: { product: any }) {
  const { id, slug, title, price, thumbnail } = product
  //const { dispatch } = useCart()
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  //   const handleAddToCart = () => {
  //     setLoading(true)
  //     setTimeout(() => {
  //       dispatch({
  //         type: 'CHANGE_CART_AMOUNT',
  //         payload: {
  //           id,
  //           slug,
  //           price,
  //           title,
  //           thumbnail,
  //           qty: 1,
  //         },
  //       })
  //       router.push('/mini-cart', {
  //         scroll: false,
  //       })
  //       setLoading(false)
  //     }, 500)
  //   }
  return (
    <Button
      color="primary"
      variant="outlined"
      loading={isLoading}
      //  onClick={handleAddToCart}
      sx={{
        padding: '3px',
        alignSelf: 'self-end',
      }}
    >
      <Add fontSize="small" />
    </Button>
  )
}
