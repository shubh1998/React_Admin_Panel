import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel } from '@mui/material'
import { StyledMenuItem, StyledSelect } from './CustomSelect.styles'

const CustomSelect = ({
  label, onChange, items, value, size, styled
}) => (
  <FormControl
    sx={{
      m: 1,
      minWidth: 180
    }}
    size={size}
  >
    <InputLabel>{label}</InputLabel>
    <StyledSelect
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      {items?.map((item) => (
        <StyledMenuItem styled={styled} key={item.id} value={item.value}>
          {item.label}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  </FormControl>
)

CustomSelect.defaultProps = {
  label: null,
  value: '',
  items: null,
  size: 'small',
  styled: true
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'medium'])
}

export default CustomSelect
