import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { TOASTER_TYPE } from 'utils/constants/constants'
// import { useNavigate } from 'react-router-dom'
// import { operatorLogin } from 'redux-thunk/thunk/Auth/Auth'

const addUserSchema = yup.object({
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
  operator: yup
    .string()
    .label('operator')
    .required('Operator is required'),
  level: yup
    .string()
    .label('level')
    .required('Level is required'),
  status: yup
    .boolean()
    .label('status')
})

export const useAddUserController = () => {
  const items = [
    {
      id: 1,
      label: 'Level 1',
      value: '12'
    },
    {
      id: 2,
      label: 'Level 2',
      value: '13'
    }
  ]
  const dispatch = useDispatch()

  const { handleSubmit, resetFieldValue, values, handleChange, setFieldValue, errors, ...rest } = useFormik({
    initialValues: {
      username: '',
      password: '',
      operator: '',
      level: '',
      status: true
    },
    validationSchema: addUserSchema,
    onSubmit: ({ username, resetForm, password, operator, level, status }) => {
      console.log('On save => ', username, password, operator, level, status)
      dispatch(handleToaster({
        openToaster: true,
        toasterMessage: 'New user created successfully !!',
        toasterType: TOASTER_TYPE.success
      }))
    }
  })

  console.log(errors, rest)

  return {
    handleSubmit,
    values,
    handleChange,
    errors,
    setFieldValue,
    items
  }
}
