import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateRangePicker from '@mui/lab/DateRangePicker'
import { CustomTextField } from 'components/ui-kit/TextField/CustomTextField'

export const DateRangePickerInput = ({ title = 'Demo Title', type = 'default', ...otherProps }) => {
  const [value, setValue] = React.useState([null, null])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ width: '300px' }}>
        <DateRangePicker
          calendars={1}
          value={value}
          startText={title}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={({ inputProps, ...startProps }, endProps) => {
            const startValue = inputProps.value
            delete inputProps.value
            return (
              <CustomTextField
                label={title}
                inputProps={inputProps}
                value={startValue ? `${startValue}-${endProps.inputProps.value}` : ''}
                labeltype={type}
                size='small'
              />
            )
          }}
          {...otherProps}
        />
      </div>
    </LocalizationProvider>
  )
}
