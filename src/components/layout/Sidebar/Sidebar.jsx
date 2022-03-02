import React from 'react'
import routerList from '../../../routes/routerList'
import { useSidebarController } from './controller/useSidebarController'
import CustomList from './components/CustomList'
import { AppDrawer } from '../../ui-kit/AppDrawer/AppDrawer'

export const Sidebar = () => {
  const {
    open,
    openCollapse,
    handleDrawer,
    handleDrawerClose
  } = useSidebarController()

  return (
    <AppDrawer open={open} handleDrawerClose={handleDrawerClose}>
      <CustomList
        list={routerList}
        handleDrawer={handleDrawer}
        openCollapse={openCollapse}
      />
    </AppDrawer>
  )
}
