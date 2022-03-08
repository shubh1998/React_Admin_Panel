import { MenuItem, Select, styled } from '@mui/material'

export const StyledSelect = styled(Select)(({ theme, type }) => ({
  borderRadius: '3px',
  '& .MuiSelect-select': {
    fontSize: type === 'filter' ? 12 : 16
  },
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  }
}))

export const StyledMenuItem = styled(MenuItem)(({ theme, styled, type }) => ({
  '&.MuiMenuItem-root': {
    display: 'flex',
    justifyContent: 'center',
    margin: '6px',
    ml: type !== 'filter' ? 26 : 0,
    fontSize: type === 'filter' ? 12 : 16,
    color: styled ? 'black' : theme.palette.primary.light,
    '&:hover': {
      marginRight: type !== 'filter' ? 26 : 3,
      marginLeft: type !== 'filter' ? 26 : 3,
      background: styled ? theme.palette.primary.main : 'white',
      color: styled ? 'white' : theme.palette.primary.light,
      borderRadius: '22px'
    }
  }
  // '&.MuiMenuItem-root.Mui-selected': {
  //   background: theme.palette.primary.main,
  //   color: 'white',
  //   borderRadius: '22px'
  // }
}))
