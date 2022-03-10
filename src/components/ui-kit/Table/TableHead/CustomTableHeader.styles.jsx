import { styled, TableHead } from '@mui/material'

export const StyledTableHead = styled(TableHead)(({ theme, type }) => ({
  backgroundColor: type === 'default'
    ? theme.colors.loginTextColor
    : theme.colors.tableHeaderStatic,
  '& .MuiTableCell-root': {
    color: type === 'default'
      ? theme.colors.white
      : theme.colors.mirage,
    fontWeight: 500
  }
}))
