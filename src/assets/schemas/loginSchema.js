import * as yup from 'yup'

const validationSchema = yup.object({
  username: yup
    .string()
    .label('username')
    .min(1)
    .email('Enter a valid username')
    .required('username is required'),
  password: yup
    .string()
    .label('password')
    .min(4, 'password must be atleast 4 characters ')
    .required('password is required')
})

export default validationSchema
