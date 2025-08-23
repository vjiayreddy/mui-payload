/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Fragment } from 'react'
import Box from '@mui/material/Box'
import { useTRPC } from '@/trpc/client'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { useSuspenseQuery } from '@tanstack/react-query'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const Categories = () => {
  const trps = useTRPC()
  const { data } = useSuspenseQuery(trps.categories.getLevelOneCategories.queryOptions())
  const anchorRefs = React.useRef<Record<string, HTMLButtonElement | null>>({})
  const [catId, setCatId] = React.useState<string | null>(null)

  const handleToggle = (id: string) => {
    setCatId((prev) => (prev === id ? null : id))
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    setCatId(null)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      setCatId(null)
    }
  }

  console.log('Categories', data)

  return (
    <Grid size="grow" container alignItems="center" spacing={2} justifyContent="center">
      {data?.map((category) => (
        <Fragment key={category.id}>
          <Button
            ref={(el) => {
              anchorRefs.current[category.id as string] = el
            }}
            id={category.id}
            aria-controls={catId === category.id ? category.slug : undefined}
            aria-expanded={catId === category.id ? 'true' : undefined}
            aria-haspopup="true"
            sx={{ height: '100%' }}
            onClick={() => handleToggle(category.id)}
          >
            {category.name}
          </Button>
          <Popper
            open={catId === category.id}
            anchorEl={anchorRefs.current[category.id]}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            style={{ width: '100%', left: 0, right: 0, zIndex: 1300, height: '100%' }} // Add this line
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper
                  elevation={0}
                  sx={(theme) => ({
                    width: '100%',
                    hweight: '100%',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  })}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <Container maxWidth="xl">
                      <Container maxWidth="xl">
                        <Box>
                          <Grid container spacing={2}>
                            {category?.childrens?.map((child) => (
                              <Grid key={child.id} size={{ sm: 4, md: 2 }}>
                                <List
                                  sx={{ width: '100%', bgcolor: 'background.paper' }}
                                  component="nav"
                                  aria-labelledby="nested-list-subheader"
                                  subheader={
                                    <ListSubheader
                                      sx={{ padding: 0 }}
                                      component="div"
                                      id="nested-list-subheader"
                                    >
                                      {child.name}
                                    </ListSubheader>
                                  }
                                >
                                  {child?.childrens?.map((subChild: any) => (
                                    <ListItemText key={subChild.id} primary={subChild.name} />
                                  ))}
                                </List>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Container>
                    </Container>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
      ))}
    </Grid>
  )
}

export default Categories
