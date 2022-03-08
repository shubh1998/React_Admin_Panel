import { Switch, styled } from '@mui/material'

export const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    backgroundColor: 'white'
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        opacity: 1
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    }
  }

}))
