import React from 'react'
import PropTypes from 'prop-types'
import { FormControl } from '@mui/material'
import { StyledMenuItem, StyledSelect } from './CustomSelect.styles'
import { LabelContainer } from '../LabelContainer/LabelContainer'

const CustomSelect = ({
  label, onChange, items, value, size, styled, labeltype, formControlStyle
}) => (
  <LabelContainer type={labeltype} label={label}>
    <FormControl
      sx={
        formControlStyle || ({
          m: 1,
          minWidth: labeltype === 'filter' ? 157 : 317,
          minHeight: labeltype === 'filter' ? 31 : 46,
          margin: 0,
          backgroundColor: (theme) => labeltype !== 'filter'
            ? theme.colors.white
            : theme.colors.textFieldGray
        })
      }
      size={size}
    >
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        type={labeltype}
      >
        {items?.map((item) => (
          <StyledMenuItem type={labeltype} styled={styled} key={item.id} value={item.value}>
            {item.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  </LabelContainer>
)

CustomSelect.defaultProps = {
  label: null,
  value: '',
  items: null,
  size: 'small',
  styled: true,
  labeltype: 'default',
  formControlStyle: null
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'medium']),
  labeltype: PropTypes.oneOf(['filter', 'default']),
  formControlStyle: PropTypes.object
}

export default CustomSelect
