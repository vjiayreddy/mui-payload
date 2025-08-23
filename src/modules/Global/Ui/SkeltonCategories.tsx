import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import React from 'react'

const SkeltonCategories = () => {
  return (
    <Grid size="grow" spacing={1} container alignItems="center" justifyContent="center">
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="text" width={100} height={20} />
    </Grid>
  )
}

export default SkeltonCategories
