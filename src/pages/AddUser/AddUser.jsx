import React from 'react'
import { Paper, Grid } from '@mui/material'
import { CustomButton } from 'components/ui-kit/Button/CustomButton'
import { CustomSelect } from 'components/ui-kit/Select/CustomSelect'
import { CustomSwitch } from 'components/ui-kit/Switch/CustomSwitch'
import { CustomTextField } from 'components/ui-kit/TextField/CustomTextField'
import { CustomTypography } from 'components/ui-kit/Typography/CustomTypography'
import { AddUserContainer, AddUserForm, GridItem } from './AddUser.styles'
import { useAddUserController } from './controller/useAddUserController'

export const AddUser = () => {
  const { handleSubmit, values, handleChange, errors, items, setFieldValue } =
    useAddUserController()

  return (
    <AddUserContainer>
      <AddUserForm>
        <CustomTypography
          value='Add User'
          variant='h4'
          sx={{ marginBottom: '15px' }}
        />
        <Paper
          elevation={3}
          sx={{
            display: 'inline-grid',
            padding: '4%',
            marginTop: '20px',
            borderRadius: '15px'
          }}
        >
          <Grid container spacing={1}>
            <GridItem item xs={12} md={6}>
              <CustomTextField
                id='username'
                name='username'
                sx={{ marginBottom: '20px' }}
                label='User Name'
                value={values.username}
                onChange={handleChange}
                error={errors.username}
                helperText={errors.username}
                enableValidation={Boolean(values.username || errors.username)}
              />
            </GridItem>
            <GridItem item xs={12} md={6}>
              <CustomTextField
                id='password'
                name='password'
                type='password'
                sx={{ marginBottom: '20px' }}
                label='Password'
                value={values.password}
                onChange={handleChange}
                error={errors.password}
                helperText={errors.password}
                enableValidation={Boolean(values.password || errors.password)}
              />
            </GridItem>
            <GridItem item xs={12} md={6}>
              <CustomTextField
                id='operator'
                name='operator'
                sx={{ marginBottom: '20px' }}
                label='Operator'
                value={values.operator}
                onChange={handleChange}
                error={errors.operator}
                helperText={errors.operator}
                enableValidation={Boolean(values.operator || errors.operator)}
              />
            </GridItem>
            <GridItem
              item
              xs={12}
              md={6}
            >
              <CustomSelect
                id='level'
                name='level'
                value={values.level}
                error={Boolean(errors.level)}
                helperText={errors.level}
                onChange={(e) => setFieldValue('level', e.target.value)}
                items={items}
                label='Level'
              />
            </GridItem>
            <GridItem item xs={12}>
              <div style={{ width: '317px' }}>
                <div style={{ textAlign: 'start' }}>
                  <CustomTypography variant='subtitle1' value='Status*' />
                </div>
                <div>
                  <CustomSwitch
                    id='status'
                    label={values.status ? 'Active' : 'Inactive'}
                    labelPlacement='start'
                    name='status'
                    size='medium'
                    checked={values.status}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem item xs={12}>
              <CustomButton
                size='large'
                disabled={Object.keys(errors).length !== 0}
                onClick={handleSubmit}
              >
                Save
              </CustomButton>
            </GridItem>
          </Grid>
        </Paper>
      </AddUserForm>
    </AddUserContainer>
  )
}
