import { AppDrawer } from './AppDrawer'

export default {
  title: 'AppDrawer',
  args: {
    openDrawer: true,
    handleDrawerClose: () => {}
  }
}

export const Default = (args) => {
  const { openDrawer, handleDrawerClose } = args
  return (
    <AppDrawer open={openDrawer} handleDrawerClose={handleDrawerClose}>
      <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Content goes here</h3>
    </AppDrawer>
  )
}
