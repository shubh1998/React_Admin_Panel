import React from 'react'
import PropTypes from 'prop-types'
import { StyledSwitch } from './CustomSwitch.styles'

export const CustomSwitch = ({
  checked,
  ...otherProps
}) => {
  return (
    <StyledSwitch
      checked={checked}
      color={checked ? 'success' : 'error'}
      {...otherProps}
    />
  )
}
CustomSwitch.defaultProps = {
  checked: false,
  size: 'medium',
  disabled: false
}

CustomSwitch.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small'])
}
