import React from 'react'
import PropTypes from 'prop-types'
import { AuthenticationValidator } from '../HOC/PrivateRoute'
import { NonAuthenticationValidator } from '../HOC/PublicRoute'

const RouteValidator = ({ hasNavbar, component: Component, ...props }) => {
  return hasNavbar
    ? <AuthenticationValidator Component={Component} />
    : <NonAuthenticationValidator Component={Component} />
}

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasNavbar: PropTypes.bool,
  path: PropTypes.string
}

export default RouteValidator
