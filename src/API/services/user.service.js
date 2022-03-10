import apiClient from 'API/axios/apiClient'

export const loginRequest = (data) => {
  return apiClient.postRequest('/company/login', data)
}

export const logoutRequest = () => {
  return apiClient.getRequest('/user/logout')
}

export const registerRequest = (data) => {
  return apiClient.postRequest('/company/register', data)
}
