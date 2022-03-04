import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomSelect from '../components/ui-kit/atoms/Select/CustomSelect'
import { CustomSwitch } from '../components/ui-kit/atoms/Switch/CustomSwitch'

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

export const Home = () => {
  const { t } = useTranslation()
  const [age, setAge] = React.useState('12')

  const handleChange = (event) => {
    console.log(event.target.value)
    setAge(event.target.value)
  }

  return (
    <div>
      {t('home')}
      <CustomSwitch size='small' color='error' />
      <CustomSwitch size='medium' />
      <CustomSwitch size='large' />
      <CustomSwitch size='small' disabled />
      <div>
        <CustomSelect
          size='small'
          value={age}
          onChange={handleChange}
          items={items}
        />
        <CustomSelect
          size='medium'
          value={age}
          onChange={handleChange}
          items={items}
        />
        <CustomSelect
          size='small'
          value={age}
          onChange={handleChange}
          items={items}
          styled={false}
        />
      </div>
    </div>
  )
}
