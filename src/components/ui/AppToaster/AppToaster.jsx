import React from 'react'
import { Alert, Slide, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { handleToaster } from '../../../redux-thunk/redux/Toaster/toasterSlice'

const TransitionLeft = (props) => {
  return <Slide {...props} direction='right' />
}

export const AppToaster = () => {
  const { open, message, type } = useSelector(state => state.toaster)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(handleToaster())
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={3000}
      onClose={handleClose}
      open={open}
      style={{ maxWidth: '95vw', width: 'fit-content', padding: 0 }}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        style={{
          fontSize: 16,
          opacity: 0.95
        }}
        variant='filled'
        onClose={handleClose}
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
