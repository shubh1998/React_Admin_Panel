import { CustomTypography } from '../Typography/CustomTypography'
import PropTypes from 'prop-types'
import { FilterContainer } from './LabelContainer.styles'

export const LabelContainer = ({ children, type, label }) => {
  return (
    type !== 'filter' && type !== 'dateFilter'
      ? (
        <div style={{ width: 'fit-content' }}>
          <div style={{ textAlign: 'start' }}>
            <CustomTypography sx={{ color: (theme) => theme.colors.loginTextColor }} variant='subtitle1' value={`${label}*`} />
          </div>
          {children}
        </div>)
      : (
        <FilterContainer type={type}>
          <div style={{ marginRight: '10px', width: 'max-content' }}>
            <CustomTypography sx={{ color: (theme) => theme.colors.loginTextColor }} variant='subtitle1' value={`${label}`} />
          </div>
          {children}
        </FilterContainer>)

  )
}

LabelContainer.defaultProps = {
  type: 'default',
  label: ''
}

LabelContainer.propTypes = {
  type: PropTypes.oneOf(['filter', 'default', 'dateFilter']),
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
