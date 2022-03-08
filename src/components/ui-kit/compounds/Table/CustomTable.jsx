import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/system'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  }
}))

export const CustomTable = ({ header, rows }) => {
  return (
    <TableContainer
      sx={{
        borderRadius: '15px 15px 0px 0px'
      }} component={Paper} size='small'
    >
      <Table aria-label='simple table'>
        <TableHead
          sx={{
            backgroundColor: (theme) => theme.colors.loginTextColor,
            '& .MuiTableCell-root': {
              color: (theme) => theme.colors.white,
              fontWeight: 500
            }
          }}
        >
          <TableRow>
            {header.map((head) => (
              <TableCell
                sx={{
                  borderRight: (theme) => `1px solid ${theme.colors.tableGray}`
                }}
                align='center'
                key={header.label}
              >
                {head.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
              <StyledTableRow
                key={row}
              >
                {header.map((head) => (
                  <TableCell
                    sx={{
                      borderRight: (theme) => `1px solid ${theme.colors.tableGray}`
                    }}
                    align='center'
                    key={head.value}
                  >
                    {row[head.value]}
                  </TableCell>
                ))}
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
