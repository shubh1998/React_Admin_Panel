import { Box, styled } from '@mui/material'

export const FilterContainer = styled(Box)(({ theme, type }) => ({
  display: 'flex',
  alignItems: 'baseline',
  padding: '1% 2% 1% 2%',
  border: '1px solid',
  justifyContent: 'space-around',
  borderColor: theme.palette.primary.main,
  borderRadius: 5,
  width: 'fit-content',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)'
}))
