import React from 'react'
import PropTypes from 'prop-types'
import { StyledSwitch } from './CustomSwitch.styles'

export const CustomSwitch = ({
  checked,
  onChange,
  ...otherProps
}) => {
  return (
    <StyledSwitch
      checked={checked}
      onChange={onChange}
      color={checked ? 'success' : 'error'}
      {...otherProps}
    />
  )
}
CustomSwitch.defaultProps = {
  checked: false,
  size: 'medium',
  disabled: false,
  onChange: () => null
}

CustomSwitch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  onChange: PropTypes.func
}
