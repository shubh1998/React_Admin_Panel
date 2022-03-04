import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

const CustomCheckbox = ({
  label, onChange, labelPlacement, checked, size
}) => {
  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={checked}
          size={size}
          onChange={onChange}
          icon={<CircleIcon sx={{ fill: (theme) => theme.colors.disableGray }} />}
          checkedIcon={<CircleIcon />}
        />
      )}
      label={label}
      labelPlacement={labelPlacement}
    />
  )
}

CustomCheckbox.defaultProps = {
  label: '',
  onChange: null,
  labelPlacement: 'end',
  checked: false,
  size: 'medium'
}

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small'])
}

export default CustomCheckbox
