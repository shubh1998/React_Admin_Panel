import React from 'react'
import PropTypes from 'prop-types'
import { StyledTextField } from './CustomTextField.styles'
import { InputAdornment } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { LabelContainer } from '../LabelContainer/LabelContainer'
import { StyledTooltip } from '../Tooltip/CustomTooltip.styles'

const CustomTextField = ({
  name,
  helperText,
  label,
  placeholder,
  inputRef,
  fullWidth,
  variant,
  defaultValue,
  type,
  disabled,
  required,
  InputProps,
  error,
  size,
  multiline,
  rows,
  onChange,
  value,
  enableValidation,
  labelType,
  ...otherProps
}) => {
  const Adornment = ({ error, tooltipTitle }) => {
    return (
      <>
        <InputAdornment position='end'>
          {error
            ? (
              <StyledTooltip
                title={tooltipTitle}
                placement='top'
                arrow
                type='error'
              >
                <ErrorOutlineIcon color='error' />
              </StyledTooltip>)
            : <CheckCircleOutlineIcon color='success' />}
        </InputAdornment>
      </>
    )
  }
  return (
    <LabelContainer type={labelType} label={label}>
      <StyledTextField
        defaultValue={defaultValue}
        inputRef={inputRef}
        fullWidth={!!fullWidth}
        name={name}
        variant={variant}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        helperText={error || helperText}
        error={!!error}
        size={size}
        multiline={multiline}
        rows={rows}
        onChange={onChange}
        value={value}
        labelType={labelType}
        InputProps={{
          endAdornment:
            enableValidation ? (value && <Adornment error={error} tooltipTitle={helperText} />) : <></>
        }}
        {...otherProps}
      />
    </LabelContainer>
  )
}

CustomTextField.defaultProps = {
  label: undefined,
  enableValidation: false,
  disabled: false,
  type: 'string',
  fullWidth: true,
  variant: 'outlined',
  inputRef: null,
  required: false,
  defaultValue: '',
  placeholder: null,
  error: null,
  helperText: null,
  size: 'medium',
  multiline: false,
  rows: null,
  onChange: () => null,
  value: undefined,
  name: '',
  labelType: 'default'
}

CustomTextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  InputProps: PropTypes.shape({}),
  error: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  multiline: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  enableValidation: PropTypes.bool,
  labelType: PropTypes.oneOf(['filter', 'default'])
}

export default CustomTextField
