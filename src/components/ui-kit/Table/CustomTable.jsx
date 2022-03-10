import PropTypes from 'prop-types'
import { Pagination, Paper, Table, TableBody } from '@mui/material'
import { CustomTableHeader } from './TableHead/CustomTableHeader'
import {
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from './CustomTable.styles'
import { CellType } from './CellTable/CellTable'

export const CustomTable = ({
  header,
  rows,
  type,
  containerStyles,
  currentPage,
  totalPage,
  onPageChange
}) => {
  return (
    <>
      <StyledTableContainer
        type={type}
        component={Paper}
        size='small'
        sx={containerStyles}
      >
        <Table aria-label='simple table'>
          <CustomTableHeader header={header} type={type} />
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                {header.map((head) => (
                  <StyledTableCell align='center' key={head.value}>
                    <CellType column={head} row={row} />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      {currentPage && totalPage && onPageChange && (
        <Pagination
          sx={{ float: 'right', margin: '10px 10px 30px' }}
          page={currentPage}
          count={totalPage}
          onChange={onPageChange}
        />
      )}
    </>
  )
}

CustomTable.defaultProps = {
  header: [],
  rows: [],
  type: 'default',
  containerStyles: {},
  onPageChange: () => null
}

CustomTable.propTypes = {
  header: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['static', 'default']),
  onPageChange: PropTypes.func,
  containerStyles: PropTypes.object
}
