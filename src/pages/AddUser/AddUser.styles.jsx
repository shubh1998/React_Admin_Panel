import { styled, Grid } from '@mui/material'

export const AddUserContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '100vh'
}))

export const AddUserForm = styled('div')(({ theme }) => ({
  width: 'fit-content',
  maxWidth: '770px',
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '500px'
  }

}))

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
}))
