import React from 'react'
import { CustomButton } from '../../../components/ui-kit/atoms/Button/CustomButton'
import CustomCheckbox from '../../../components/ui-kit/atoms/CheckBox/CustomCheckBox'
import { DateRangePickerInput } from '../../../components/ui-kit/atoms/DateRangePickerInput/DateRangePickerInput'
import CustomSelect from '../../../components/ui-kit/atoms/Select/CustomSelect'
import { CustomSwitch } from '../../../components/ui-kit/atoms/Switch/CustomSwitch'
import CustomTextField from '../../../components/ui-kit/atoms/TextField/CustomTextField'

export const CancelledGames = () => {
  const [age, setAge] = React.useState('12')
  const [checkedOne, setCheckedOne] = React.useState(true)
  const [checkedTwo, setCheckedTwo] = React.useState(false)

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleCheckBoxOneChange = (event) => {
    setCheckedOne(event.target.checked)
  }
  const handleCheckBoxTwoChange = (event) => {
    setCheckedTwo(event.target.checked)
  }
  const items = [
    {
      id: 1,
      label: 'Dropdown Open',
      value: '12'
    },
    {
      id: 2,
      label: 'Dropdown Open',
      value: '13'
    }
  ]

  return (
    <div>
      <div>
        <CustomButton>Show Transaction</CustomButton>
        <CustomButton variant='text'>Show Transaction</CustomButton>
      </div>
      <CustomSwitch size='small' color='error' />
      <CustomSwitch size='medium' />
      <CustomSwitch size='large' />
      <CustomSwitch size='small' disabled />
      <div>
        <CustomSelect
          value={age}
          onChange={handleChange}
          items={items}
          labeltype='filter'
          label='label'
        />
        <CustomSelect
          value={age}
          onChange={handleChange}
          items={items}
          label='label'
        />
        <CustomSelect
          size='small'
          value={age}
          onChange={handleChange}
          items={items}
          styled={false}
          label='label'
        />
      </div>
      <div>
        <CustomCheckbox
          checked={checkedOne}
          onChange={handleCheckBoxOneChange}
          label='Checked start'
          labelPlacement='start'
        />
      </div>
      <div>
        <CustomCheckbox
          checked={checkedTwo}
          onChange={handleCheckBoxTwoChange}
          label='Checked end'
          labelPlacement='end'
          size='small'
          circle
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomTextField
          label='User Name'
          enableValidation
          error='error'
          value='sdfas'
          helperText='error'
        />
        <CustomTextField
          label='User Name'
          enableValidation
          value='sdfas'
          helperText='no error'
        />
        <CustomTextField />
      </div>
      <div>
        <br /><br />
        <CustomTextField
          labeltype='filter'
          size='small'
          label='User Name'
        />
      </div>
      <br />
      <br />
      <br />
      <div>
        <DateRangePickerInput title='Select Date' type='dateFilter' />
      </div>
    </div>
  )
}
