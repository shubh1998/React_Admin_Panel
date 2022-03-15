import * as yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { operatorLogin } from 'redux-thunk/thunk/Auth/Auth'

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
      // const jwtToken = encodeURIComponent(username + password)
      // localStorage.setItem(TOKEN, jwtToken)
      dispatch(operatorLogin({
        username,
        password,
        navigate
      }))
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
