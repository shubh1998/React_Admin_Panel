import { TableCell, TableContainer, TableRow } from '@mui/material'
import { styled } from '@mui/system'

export const StyledTableContainer = styled(TableContainer)(({ theme, type }) => ({
  borderRadius: type === 'default'
    ? '15px 15px 0px 0px'
    : 0
}))

export const StyledTableCell = styled(TableCell)(({ theme, header = false, type = 'default' }) => ({
  borderRight: `1px solid ${theme.colors.tableGray}`,
  fontWeight: header ? 500 : 300,
  maxWidth: '150px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...(header && type === 'static' && { borderBottom: `2px solid ${theme.colors.tableHeaderBottomBorder}` }),
  ...(!header && { color: theme.colors.mirage })

}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  }
}))
