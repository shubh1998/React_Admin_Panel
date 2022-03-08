import { styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme, error, labelType }) => ({
  backgroundColor: labelType !== 'filter'
    ? theme.colors.white
    : theme.colors.textFieldGray,
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: error ? theme.palette.primary.error : theme.palette.primary.main,
      borderWidth: '1px'
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? theme.palette.primary.error : theme.palette.primary.main,
      borderWidth: '1px'
    }
  }
}))
