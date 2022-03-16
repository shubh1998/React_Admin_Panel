import React from 'react'
import PropTypes from 'prop-types'
import { FormControl } from '@mui/material'
import { StyledMenuItem, StyledSelect } from './CustomSelect.styles'
import { LabelContainer } from 'components/ui-kit/LabelContainer/LabelContainer'

export const CustomSelect = ({
  label, onChange, items, value, styled, labeltype, formControlStyle, disabled
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
      size='small'
    >
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        type={labeltype}
        disabled={disabled}
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
  disabled: false
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labeltype: PropTypes.oneOf(['filter', 'default']),
  formControlStyle: PropTypes.object,
  disabled: PropTypes.bool
}
