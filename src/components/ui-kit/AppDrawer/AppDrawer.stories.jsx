import { AppDrawer } from './AppDrawer'

export default {
  title: 'AppDrawer',
  args: {
    openDrawer: true,
    handleDrawerClose: () => {}
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const Default = (args) => {
  const { openDrawer, handleDrawerClose } = args
  return (
    <AppDrawer open={openDrawer} handleDrawerClose={handleDrawerClose}>
      <h5 style={{ color: '#ffffff' }}>Content goes here</h5>
    </AppDrawer>
  )
}
