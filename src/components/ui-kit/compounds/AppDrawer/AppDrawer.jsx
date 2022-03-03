import { Box, Divider } from '@mui/material'
import React from 'react'
import { LeftArrowIcon } from '../../atoms/icons/iconComponents/LeftArrowIcon'
import { CustomTypography } from '../../atoms/Typography/CustomTypography'
import { DrawerHeader, StyledDrawer, StyledIconButton } from './AppDrawer.styles'

export const AppDrawer = ({ children, openDrawer = true, handleDrawer = () => {} }) => {
  return (
    <StyledDrawer anchor='left' variant='persistent' open={openDrawer}>
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <CustomTypography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
            value='Admin'
          />
          <StyledIconButton padding='0px' onClick={handleDrawer}>
            <LeftArrowIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Box>
    </StyledDrawer>
  )
}
