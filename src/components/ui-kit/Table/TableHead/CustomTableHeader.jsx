import PropTypes from 'prop-types'
import { TableRow } from '@mui/material'
import { StyledTableHead } from './CustomTableHeader.styles'
import { StyledTableCell } from '../CustomTable.styles'

export const CustomTableHeader = ({ header, type }) => {
  return (
    <StyledTableHead type={type}>
      <TableRow>
        {header.map((head) => (
          <StyledTableCell
            align='center'
            key={head.label}
            type={type}
            cellin='header'
          >
            {head.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </StyledTableHead>

  )
}

CustomTableHeader.defaultProps = {
  header: [],
  rows: [],
  type: 'default'
}

CustomTableHeader.propTypes = {
  header: PropTypes.array,
  rows: PropTypes.array,
  type: PropTypes.oneOf(['static', 'default'])
}
