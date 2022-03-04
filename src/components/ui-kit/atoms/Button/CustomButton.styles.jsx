import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme, round }) => ({
  borderRadius: round ? '30px' : '2px'
  // minWidth: '230px',
  // minHeight: '60px'
}))
