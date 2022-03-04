import React from 'react'
import PropTypes from 'prop-types'
import { StyledSwitch } from './CustomSwitch.styles'

export const CustomSwitch = ({
  defaultChecked,
  ...otherProps
}) => {
  return (
    <StyledSwitch
      defaultChecked={defaultChecked}
      {...otherProps}
    />
  )
}
CustomSwitch.defaultProps = {
  color: 'success',
  size: 'medium',
  disabled: false,
  defaultChecked: false
}

CustomSwitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small'])
}
