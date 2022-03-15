import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { operatorLogin } from 'redux-thunk/thunk/Auth/Auth'
import { REMEMBER_ME } from 'utils/constants/constants'

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
    .required('Password is required'),
  remember: yup.boolean()
})

export const useLoginController = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: false
    },
    validationSchema: loginSchema,
    onSubmit: async ({ username, password, remember }) => {
      if (remember) {
        localStorage.setItem(REMEMBER_ME, remember)
      }
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
    errors
  }
}
