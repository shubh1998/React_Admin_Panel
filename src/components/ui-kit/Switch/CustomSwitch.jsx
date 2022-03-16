import React from 'react'
import PropTypes from 'prop-types'
import { StyledFormControlLabel, StyledSwitch } from './CustomSwitch.styles'

export const CustomSwitch = ({
  checked,
  onChange,
  label,
  value,
  labelPlacement,
  ...otherProps
}) => {
  return (
    label && labelPlacement
      ? <StyledFormControlLabel
          checked={checked}
          control={<StyledSwitch
            checked={checked}
            onChange={onChange}
            color={checked ? 'success' : 'error'}
            {...otherProps}
                   />}
          label={label}
          labelPlacement={labelPlacement}
        />
      : <StyledSwitch
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
  onChange: () => null,
  label: ''
}

CustomSwitch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  label: PropTypes.string,
  onChange: PropTypes.func
}
