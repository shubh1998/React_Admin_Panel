import { Box, Divider } from '@mui/material'
import React from 'react'
import routerList from '../../../routes/routerList'
import { DrawerHeader, StyledDrawer, StyledIconButton } from './styles/Sidebar.styles'
import { LeftArrowIcon } from '../../ui-kit/icons/iconComponents/LeftArrowIcon'
import { useSidebarController } from './controller/useSidebarController'
import CustomTypography from '../../ui-kit/Typography/CustomTypography'
import CustomList from './CustomList'

export const Drawer = ({ children, open, handleDrawerClose }) => {
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

export const Sidebar = () => {
  const {
    open,
    openCollapse,
    handleDrawer,
    handleDrawerClose
  } = useSidebarController()

  return (
    <Drawer open={open} handleDrawerClose={handleDrawerClose}>
      <CustomList
        list={routerList}
        handleDrawer={handleDrawer}
        openCollapse={openCollapse}
      />
    </Drawer>
  )
}
