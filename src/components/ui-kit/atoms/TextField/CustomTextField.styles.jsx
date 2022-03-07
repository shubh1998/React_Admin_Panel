import { styled, TextField, Tooltip, tooltipClasses } from '@mui/material'

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

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'red'
  }
}))
