import React from 'react'
import { Paper, Grid } from '@mui/material'
import { CustomButton } from 'components/ui-kit/Button/CustomButton'
import { CustomSelect } from 'components/ui-kit/Select/CustomSelect'
import { CustomSwitch } from 'components/ui-kit/Switch/CustomSwitch'
import { CustomTextField } from 'components/ui-kit/TextField/CustomTextField'
import { CustomTypography } from 'components/ui-kit/Typography/CustomTypography'
import { AddUserContainer, AddUserForm, GridItem } from './AddUser.styles'

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

export const AddUser = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <AddUserContainer>
      <AddUserForm>
        <CustomTypography value='Add User' variant='h4' sx={{ marginBottom: '15px' }} />
        <Paper
          elevation={3} sx={{
            display: 'inline-grid',
            padding: '4%',
            paddingRight: 0,
            marginTop: '20px',
            borderRadius: '15px'
          }}
        >
          <Grid container spacing={1}>
            <GridItem
              item
              xs={12}
              md={6}
            >
              <CustomTextField
                sx={{ marginBottom: '20px' }}
                label='User Name'
              />
            </GridItem>
            <GridItem
              item
              xs={12}
              md={6}
            >
              <CustomTextField
                type='password'
                sx={{ marginBottom: '20px' }}
                label='Password'
              />
            </GridItem>
            <GridItem
              item
              xs={12}
              md={6}
            >
              <CustomTextField
                sx={{ marginBottom: '20px' }}
                label='Operator'
              />
            </GridItem>
            <GridItem
              item
              xs={12}
              md={6}
              sx={{
                marginBottom: '20px'
              }}
            >
              <CustomSelect
                value={age}
                onChange={handleChange}
                items={items}
                label='Level'
              />
            </GridItem>
            <GridItem
              item
              xs={12}
            >
              <div style={{ width: '317px' }}>
                <div style={{ textAlign: 'start' }}>
                  <CustomTypography variant='subtitle1' value='Status*' />
                </div>
                <div style={{
                  display: 'flex'
                }}
                >
                  <CustomTypography variant='subtitle1' value='Active' />
                  <CustomSwitch size='medium' />
                </div>
              </div>
            </GridItem>
            <GridItem
              item
              xs={12}
            >
              <CustomButton size='large'>SAVE</CustomButton>
            </GridItem>
          </Grid>
        </Paper>
      </AddUserForm>
    </AddUserContainer>

  )
}
