import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'

const CustomCheckbox = ({
  label, onChange, labelPlacement, checked, size, circle
}) => {
  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={checked}
          size={size}
          onChange={onChange}
          icon={!circle
            ? <CheckBoxOutlineBlankRoundedIcon sx={{ fill: (theme) => theme.colors.disableGray }} />
            : <CircleIcon sx={{ fill: (theme) => theme.colors.disableGray }} />}
          checkedIcon={!circle
            ? <CheckBoxRoundedIcon />
            : <CircleIcon />}
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
  size: 'medium',
  circle: false
}

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small']),
  circle: PropTypes.bool
}

export default CustomCheckbox
