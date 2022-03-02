import React from 'react'
import { createPortal } from 'react-dom'
import { Alert, Slide, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { handleToaster } from '../../../../redux-thunk/redux/Toaster/toasterSlice'
import { notificationRoot } from '../../../../assets/domNodes'

const TransitionLeft = (props) => {
  return <Slide {...props} direction='right' />
}

export const Toaster = ({ openToaster, type, message, handleToasterClose }) => {
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
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export const AppToaster = () => {
  const { open, message, type } = useSelector(state => state.toaster)
  const dispatch = useDispatch()

  const handleToasterClose = () => {
    dispatch(handleToaster({ open: false }))
  }

  return notificationRoot
    ? createPortal(<Toaster openToaster={open} message={message} type={type} handleToasterClose={handleToasterClose} />, notificationRoot)
    : <></>
}
