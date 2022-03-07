import React from 'react'
import PropTypes from 'prop-types'
import { FormControl } from '@mui/material'
import { StyledMenuItem, StyledSelect } from './CustomSelect.styles'
import { LabelContainer } from '../LabelContainer/LabelContainer'

const CustomSelect = ({
  label, onChange, items, value, size, styled, labelType, formControlStyle
}) => (
  <LabelContainer type={labelType} label={label}>
    <FormControl
      sx={
        formControlStyle || ({
          m: 1,
          minWidth: labelType === 'filter' ? 157 : 317,
          minHeight: labelType === 'filter' ? 31 : 46,
          borderRadius: 3,
          margin: 0,
          backgroundColor: (theme) => labelType !== 'filter'
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
        type={labelType}
      >
        {items?.map((item) => (
          <StyledMenuItem type={labelType} styled={styled} key={item.id} value={item.value}>
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
  labelType: 'default',
  formControlStyle: null
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'medium']),
  labelType: PropTypes.oneOf(['filter', 'default']),
  formControlStyle: PropTypes.object
}

export default CustomSelect
