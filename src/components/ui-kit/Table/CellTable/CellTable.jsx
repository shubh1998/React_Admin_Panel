import PropTypes from 'prop-types'
import CircleIcon from '@mui/icons-material/Circle'
import { CustomTypography } from 'components/ui-kit/Typography/CustomTypography'
import { CustomSwitch } from 'components/ui-kit/Switch/CustomSwitch'
import { StatusContainer } from '../CustomTable.styles'

export const CellType = ({ column, row }) => {
  const cellData = row[column.value]
  switch (column.type) {
    case 'status':
      return (
        <StatusContainer>
          <CircleIcon
            sx={{
              fontSize: 13
            }} size='small' color={cellData ? 'success' : 'error'}
          />
          <CustomTypography
            align='left'
            sx={{ fontSize: 16, width: '60px' }}
            value={cellData ? 'Active' : 'Inactive'}
          />

        </StatusContainer>
      )
    case 'switch':
      return (
        <div>
          <CustomSwitch
            inputProps={{ 'aria-label': 'controlled' }}
            checked={cellData.switchValue}
          />
        </div>
      )
    default:
      return cellData || null
  }
}

CellType.defaultProps = {
  column: {},
  rows: {}
}

CellType.propTypes = {
  column: PropTypes.object.isRequired,
  rows: PropTypes.object.isRequired
}
