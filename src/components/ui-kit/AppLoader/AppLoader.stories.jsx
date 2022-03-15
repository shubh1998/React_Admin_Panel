import { colors } from 'theme/colors/colors'
import { AppLoader } from './AppLoader'

export default {
  title: 'atoms/AppLoader',
  args: {
    variant: 'pulse',
    size: 15,
    height: 40,
    width: 5,
    radius: 2,
    color: colors.darkJungleGreen,
    speedMultiplier: 1,
    margin: 2
  },
  argTypes: {
    variant: {
      type: 'select',
      options: ['pulse', 'scale']
    },
    size: {
      type: 'number'
    },
    height: {
      type: 'number'
    },
    width: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    speedMultiplier: {
      type: 'number'
    },
    margin: {
      type: 'number'
    }
  }
}

export const Default = (args) => {
  return (<AppLoader {...args} />)
}
