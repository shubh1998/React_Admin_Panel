import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { operatorLogin } from 'redux-thunk/thunk/Auth/Auth'
import { ROUTE_PATHS, TOKEN } from 'utils/constants/constants'
import validationSchema from 'assets/schemas/loginSchema'
import { useFormik } from 'formik'

export const useLoginController = () => {
  const navigate = useNavigate()
  const [checkedOne, setCheckedOne] = useState(true)
  const dispatch = useDispatch()

  const handleCheckBoxOneChange = (event) => {
    setCheckedOne(event.target.checked)
  }

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async ({ username, password }) => {
      console.log('username password', username, password)
      const jwtToken = encodeURIComponent(username + password)
      localStorage.setItem(TOKEN, jwtToken)
      dispatch(operatorLogin({
        username,
        password
      }))
      navigate(ROUTE_PATHS.dashboard, {
        replace: true
      })
    }
  })

  return {
    handleSubmit,
    values,
    handleChange,
    errors,
    checkedOne,
    handleCheckBoxOneChange
  }
}
