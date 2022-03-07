import React from 'react'
import routerList from '../../../routes/routerList'
import { useSidebarController } from './controller/useSidebarController'
import { AppDrawer } from '../../ui-kit/compounds/AppDrawer/AppDrawer'
import { CustomList } from './components/CustomList'

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
    <AppDrawer openDrawer={isSideBarOpen} handleDrawer={toggleSideNavbar} text={t('admin')}>
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
