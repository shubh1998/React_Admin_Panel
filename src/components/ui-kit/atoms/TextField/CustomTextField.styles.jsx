import { styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme, error, labeltype }) => ({
  backgroundColor: labeltype !== 'filter'
    ? theme.colors.white
    : theme.colors.textFieldGray,
  '& .MuiInputBase-input': {
    padding: labeltype !== 'filter' && labeltype !== 'dateFilter' ? 12 : 4
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: error ? theme.palette.primary.error : theme.palette.primary.main,
      borderWidth: '1px'
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? theme.palette.primary.error : theme.palette.primary.main,
      borderWidth: '1px'
    }
  },
  ...(labeltype === 'dateFilter' ? { width: '200px', backgroundColor: theme.colors.textFieldGray } : {})
}))
