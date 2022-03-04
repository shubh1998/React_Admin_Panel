// import { TOASTER_TYPE } from '../../../utils/constants/constants'
import { Toaster } from './AppToaster'

export default {
  title: 'atoms/Toasters',
  args: {
    openToaster: false,
    toasterType: 'success'
  },
  argTypes: {
    toasterType: {
      type: 'select',
      options: ['success', 'warning', 'error', 'info']
    }
  }
}

export const Default = ({ openToaster, toasterType }) => {
  return (<Toaster openToaster={openToaster} toasterMessage='This is demo' toasterType={toasterType} handleToasterClose={() => {}} />)
}
