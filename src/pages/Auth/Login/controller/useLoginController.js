import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { operatorLogin } from 'redux-thunk/thunk/Auth/Auth'
import { ROUTE_PATHS, TOKEN } from 'utils/constants/constants'
import { useFormik } from 'formik'
import * as yup from 'yup'

const loginSchema = yup.object({
  username: yup
    .string()
    .label('username')
    .min(4, 'Username must be atleast 4 characters')
    .max(32, 'Username cannot exceed 32 characters')
    .required('Username is required'),
  password: yup
    .string()
    .label('password')
    .min(4, 'Password must be atleast 4 characters')
    .max(32, 'Password cannot exceed 32 characters')
    .required('Password is required')
})

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
    validationSchema: loginSchema,
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
