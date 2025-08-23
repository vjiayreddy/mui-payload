'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MenuList from '@mui/material/MenuList'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { styled } from '@mui/material/styles'
import { Header as HeaderType } from '@/payload-types'
import Image from 'next/image'

const StyledHeader = styled(AppBar)(({ theme }) => ({
  '& .Container-root': {
    height: theme.mixins.toolbar.minHeight,
  },
  '& .MuiGrid-root': {
    height: '100%',
  },
}))

interface HeaderProps {
  data: HeaderType
  categories?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ data, categories }) => {
  return (
    <StyledHeader position="fixed">
      <Toolbar disableGutters>
        <Container maxWidth="xl" className="Container-root">
          <Grid container alignItems="center">
            <Grid size="auto" container alignItems="center" justifyContent="flex-start">
              <Image
                width={130}
                alt="cartwale-logo"
                height={50}
                src={typeof data.logo === 'string' ? data.logo : data.logo?.url || ''}
              />
            </Grid>
            {categories}
            <Grid size="auto" container alignItems="center" justifyContent="flex-end">
              <div>USER ACTIONS</div>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header
