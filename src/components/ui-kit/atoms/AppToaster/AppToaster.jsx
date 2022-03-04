import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Alert, Slide, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { handleToaster } from '../../../../redux-thunk/redux/Toaster/toasterSlice'
import { notificationRoot } from '../../../../assets/domNodes'

const TransitionLeft = (props) => {
  return <Slide {...props} direction='right' />
}

export const Toaster = ({ openToaster, toasterType, toasterMessage, handleToasterClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={3000}
      onClose={handleToasterClose}
      open={openToaster}
      style={{ maxWidth: '95vw', width: 'fit-content', padding: 0 }}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        style={{
          fontSize: 16,
          opacity: 0.95
        }}
        variant='filled'
        onClose={handleToasterClose}
        severity={toasterType}
      >
        {toasterMessage}
      </Alert>
    </Snackbar>
  )
}

export const AppToaster = () => {
  const { openToaster, toasterMessage, toasterType } = useSelector(state => state.toaster)
  const dispatch = useDispatch()

  const handleToasterClose = () => {
    dispatch(handleToaster({ openToaster: false }))
  }

  return notificationRoot
    ? createPortal(<Toaster openToaster={openToaster} toasterMessage={toasterMessage} toasterType={toasterType} handleToasterClose={handleToasterClose} />, notificationRoot)
    : <></>
}

Toaster.defaultProps = {
  openToaster: true,
  toasterMessage: 'This is demo of toaster',
  toasterType: 'success'
}

Toaster.propTypes = {
  openToaster: PropTypes.bool,
  toasterMessage: PropTypes.string,
  toasterType: PropTypes.oneOf(['success', 'error', 'warning', 'info'])
}
