import { TableCell, TableContainer, TableRow } from '@mui/material'
import { styled } from '@mui/system'

export const StyledTableContainer = styled(TableContainer)(({ theme, type }) => ({
  borderRadius: type === 'default'
    ? '15px 15px 0px 0px'
    : 0
}))

export const StyledTableCell = styled(TableCell)(({ theme, cellin = 'body', type = 'default' }) => ({
  borderRight: `1px solid ${theme.colors.tableGray}`,
  fontWeight: cellin === 'header' ? 500 : 300,
  maxWidth: '150px',
  overflow: 'hidden',
  borderBottom: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...(cellin === 'header' && type === 'static' && { borderBottom: `2px solid ${theme.colors.tableHeaderBottomBorder}` }),
  ...(cellin !== 'header' && { color: theme.colors.mirage, padding: '5px 10px' })

}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  }
}))

export const StatusContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '8%',
  alignItems: 'center'
}))
