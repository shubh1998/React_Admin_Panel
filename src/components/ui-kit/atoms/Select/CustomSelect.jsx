import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel } from '@mui/material'
import { StyledMenuItem, StyledSelect } from './CustomSelect.styles'

const CustomSelect = ({
  label, onChange, items, value, size, styled, type, formControlStyle
}) => (
  <FormControl
    sx={
      formControlStyle || ({
        m: 1,
        minWidth: type === 'filter' ? 157 : 317,
        minHeight: type === 'filter' ? 31 : 46,
        borderRadius: 3
      })
    }
    size={size}
  >
    <InputLabel>{label}</InputLabel>
    <StyledSelect
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      type={type}
    >
      {items?.map((item) => (
        <StyledMenuItem type={type} styled={styled} key={item.id} value={item.value}>
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
  styled: true,
  type: 'default'
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'medium']),
  type: PropTypes.oneOf(['filter', 'default']),
  formControlStyle: PropTypes.object
}

export default CustomSelect
