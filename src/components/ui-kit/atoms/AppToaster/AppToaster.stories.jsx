// import { TOASTER_TYPE } from '../../../utils/constants/constants'
import { Toaster } from './AppToaster'

export default {
  title: 'atoms/Toasters',
  args: {
    successToaster: false,
    toasterTypes: 'success'
  },
  argTypes: {
    toasterTypes: {
      type: 'select',
      options: ['success', 'warning', 'error', 'info']
    }
  }
}

export const Default = ({ successToaster, toasterTypes }) => {
  return (<Toaster openToaster={successToaster} message='This is demo' type={toasterTypes} handleToasterClose={() => {}} />)
}
