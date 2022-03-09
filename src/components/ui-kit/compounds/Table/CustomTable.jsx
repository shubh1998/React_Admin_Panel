import PropTypes from 'prop-types'
import { Paper, Table, TableBody } from '@mui/material'
import { CustomTableHeader } from './TableHead/CustomTableHeader'
import { StyledTableCell, StyledTableContainer, StyledTableRow } from './CustomTable.styles'
import { CellType } from './CellTable/CellTable'

export const CustomTable = ({ header, rows, type, containerStyles }) => {
  return (
    <StyledTableContainer
      type={type}
      component={Paper}
      size='small'
      sx={containerStyles}
    >
      <Table aria-label='simple table'>
        <CustomTableHeader
          header={header}
          type={type}
        />
        <TableBody>
          {
            rows.map((row) => (
              <StyledTableRow
                key={row}
              >
                {header.map((head) => (
                  <StyledTableCell
                    align='center'
                    key={head.value}
                  >
                    <CellType column={head} row={row} />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

CustomTable.defaultProps = {
  header: [],
  rows: [],
  type: 'default',
  containerStyles: {}
}

CustomTable.propTypes = {
  header: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['static', 'default']),
  containerStyles: PropTypes.object
}
