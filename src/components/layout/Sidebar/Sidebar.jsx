import React from 'react'
import CustomList from './components/CustomList'
import routerList from '../../../routes/routerList'
import { useSidebarController } from './controller/useSidebarController'
import { AppDrawer } from '../../ui-kit/AppDrawer/AppDrawer'

export const Sidebar = () => {
  const {
    t,
    location,
    isSideBarOpen,
    expandedMenuItem,
    handleDrawerOptions,
    toggleSideNavbar
  } = useSidebarController()

  return (
    <AppDrawer open={isSideBarOpen} handleDrawerClose={toggleSideNavbar}>
      <CustomList
        t={t}
        location={location}
        list={routerList}
        handleDrawerOptions={handleDrawerOptions}
        expandedMenuItem={expandedMenuItem}
      />
    </AppDrawer>
  )
}
