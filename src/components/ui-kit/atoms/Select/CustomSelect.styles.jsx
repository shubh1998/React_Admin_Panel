import { MenuItem, Select, styled } from '@mui/material'

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '3px',
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  }
}))

export const StyledMenuItem = styled(MenuItem)(({ theme, styled }) => ({
  '&.MuiMenuItem-root': {
    display: 'flex',
    justifyContent: 'center',
    margin: '6px',
    color: styled ? 'black' : theme.palette.primary.main,
    '&:hover': {
      background: styled ? theme.palette.primary.main : 'white',
      color: styled ? 'white' : theme.palette.primary.main,
      borderRadius: '22px'
    }
  }
  // '&.MuiMenuItem-root.Mui-selected': {
  //   background: theme.palette.primary.main,
  //   color: 'white',
  //   borderRadius: '22px'
  // }
}))
