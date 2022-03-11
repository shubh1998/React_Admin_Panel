import React from 'react'
import { useSidebarController } from './controller/useSidebarController'
import { CustomList } from './components/CustomList'
import { AppDrawer } from 'components/ui-kit/AppDrawer/AppDrawer'
import { routerList } from 'routes/routerList'

export const Sidebar = ({ isMobileView }) => {
  const {
    t,
    location,
    isSideBarOpen,
    expandedMenuItem,
    handleDrawerOptions,
    toggleSideNavbar
  } = useSidebarController()

  return (
    <AppDrawer
      openDrawer={isSideBarOpen}
      handleDrawer={toggleSideNavbar}
      text={t('admin')}
      isMobileView={isMobileView}
    >
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
