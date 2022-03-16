import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormHelperText } from '@mui/material'
import { StyledMenuItem, StyledSelect } from './CustomSelect.styles'
import { LabelContainer } from 'components/ui-kit/LabelContainer/LabelContainer'

export const CustomSelect = ({
  label, error, onChange, items, value, styled, labeltype, formControlStyle, disabled, helperText,
  ...otherProps
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
      error={error}
      size='small'
    >
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        type={labeltype}
        disabled={disabled}
        {...otherProps}
      >
        <StyledMenuItem type={labeltype} styled={styled} key={0} value='' disabled>
          Please Select
        </StyledMenuItem>
        {items?.map((item) => (
          <StyledMenuItem type={labeltype} styled={styled} key={item.id} value={item.value}>
            {item.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  </LabelContainer>
)

CustomSelect.defaultProps = {
  label: null,
  value: '',
  items: null,
  styled: true,
  labeltype: 'default',
  formControlStyle: null,
  disabled: false,
  error: false
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labeltype: PropTypes.oneOf(['filter', 'default']),
  formControlStyle: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}
