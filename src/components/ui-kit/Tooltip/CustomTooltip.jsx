import React from 'react'
import PropTypes from 'prop-types'
import { StyledTooltip } from './CustomTooltip.styles'

export const CustomTooltip = ({
  title, arrow, children, type, ...otherProps
}) => (
  <StyledTooltip
    title={title}
    arrow={arrow}
    type={type}
    {...otherProps}
  >
    {children}
  </StyledTooltip>
)

CustomTooltip.defaultProps = {
  title: '',
  arrow: true,
  type: 'default'
}

CustomTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'error'])
}
