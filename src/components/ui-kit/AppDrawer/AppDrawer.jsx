import { Box, Divider } from '@mui/material'
import React from 'react'
import { LeftArrowIcon } from '../icons/iconComponents/LeftArrowIcon'
import CustomTypography from '../Typography/CustomTypography'
import { DrawerHeader, StyledDrawer, StyledIconButton } from './AppDrawer.styles'

export const AppDrawer = ({ children, open = true, handleDrawerClose = () => {} }) => {
  return (
    <StyledDrawer anchor='left' variant='persistent' open={open}>
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <CustomTypography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
            value='Admin'
          />
          <StyledIconButton padding='0px' onClick={handleDrawerClose}>
            <LeftArrowIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Box>
    </StyledDrawer>
  )
}
