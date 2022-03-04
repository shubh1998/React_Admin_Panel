import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme, round }) => ({
  borderRadius: round ? '30px' : '2px'
}))
