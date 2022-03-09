import PropTypes from 'prop-types'
import { CustomTypography } from '../../../atoms/Typography/CustomTypography'
import CircleIcon from '@mui/icons-material/Circle'
import { CustomSwitch } from '../../../atoms/Switch/CustomSwitch'

export const CellType = ({ column, row }) => {
  const cellData = row[column.value]
  switch (column.type) {
    case 'status':
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8%',
          alignItems: 'center'
        }}
        >
          <CircleIcon
            sx={{
              fontSize: 13
            }} size='small' color={cellData ? 'success' : 'error'}
          />
          <CustomTypography
            align='start'
            sx={{ fontSize: 16, width: '60px' }}
            value={cellData ? 'Active' : 'Inactive'}
          />

        </div>
      )
    case 'switch':
      console.log('dsfsdfs', cellData.switchValue)
      return (
        <div>
          <CustomSwitch
            inputProps={{ 'aria-label': 'controlled' }}
            checked={cellData.switchValue} onChange={() => {
              cellData.onChange()
            }}
          />
        </div>
      )
    default:
      return cellData || null
  }
}

CellType.defaultProps = {
  column: [],
  rows: []
}

CellType.propTypes = {
  column: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
}
