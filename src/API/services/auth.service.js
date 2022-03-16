import apiClient from 'API/axios/apiClient'

export const loginService = (data) => {
  return apiClient.postRequest('/auth/login', data)
}

export const logoutService = () => {
  return apiClient.getRequest('/auth/logout')
}
