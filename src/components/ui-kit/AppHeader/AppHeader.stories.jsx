import { AppHeader } from './AppHeader'

export default {
  title: 'AppHeader',
  args: {
    openHeader: true,
    handleDrawer: () => {}
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
  const { openHeader, handleDrawer } = args
  return (
    <AppHeader open={openHeader} handleDrawerClose={handleDrawer} left={<p>Left Content</p>} right={<p>Left Content</p>} />
  )
}
