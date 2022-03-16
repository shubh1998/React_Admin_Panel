import { styled, Grid } from '@mui/material'

export const AddUserContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '100vh'
}))

export const AddUserForm = styled('div')(() => ({
  width: 'fit-content',
  maxWidth: '900px',
  margin: 'auto'
}))

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
}))
