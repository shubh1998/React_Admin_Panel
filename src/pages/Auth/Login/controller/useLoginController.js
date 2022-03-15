import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { operatorLogin } from 'redux-thunk/thunk/Auth/Auth'
import { ROUTE_PATHS, TOKEN } from 'utils/constants/constants'

export const useLoginController = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkedOne, setCheckedOne] = useState(true)
  const dispatch = useDispatch()

  const loginHandler = () => {
    if (email && password) {
      const jwtToken = encodeURIComponent(email + password)
      localStorage.setItem(TOKEN, jwtToken)
      dispatch(operatorLogin({
        username: 'OperatorUser1',
        password: 'test@123'
      }))
      navigate(ROUTE_PATHS.dashboard, {
        replace: true
      })
    }
  }

  const handleCheckBoxOneChange = (event) => {
    setCheckedOne(event.target.checked)
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    checkedOne,
    loginHandler,
    handleCheckBoxOneChange
  }
}
