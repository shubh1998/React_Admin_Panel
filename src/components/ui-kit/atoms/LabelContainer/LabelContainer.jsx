import { CustomTypography } from '../Typography/CustomTypography'
import PropTypes from 'prop-types'
import { FilterContainer } from './LabelContainer.styles'

export const LabelContainer = ({ children, type, label }) => {
  return (
    type !== 'filter'
      ? (
        <div style={{ width: 'fit-content' }}>
          <div style={{ textAlign: 'start' }}>
            <CustomTypography sx={{ color: (theme) => theme.colors.loginTextColor }} variant='subtitle1' value={`${label}*`} />
          </div>
          {children}
        </div>)
      : (
        <FilterContainer>
          <div style={{ marginRight: '20px' }}>
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
  type: PropTypes.oneOf(['filter', 'default']),
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
