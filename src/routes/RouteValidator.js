import React from 'react'
import PropTypes from 'prop-types'
import { MainLayout } from '../components/MainLayout/MainLayout'

const RouteValidator = ({ hasNavbar, component: Component, ...props }) => {
  if (hasNavbar) {
    return (
      <>
        <MainLayout>
          <Component />
        </MainLayout>
      </>
    )
  }
  return <Component />
}

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasNavbar: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
}

export default RouteValidator
