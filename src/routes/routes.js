import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { AuthenticationValidator } from '../HOC/PrivateRoute'
import NotFound from '../pages/NotFound'
import routes from './routerList'
import RouteValidator from './RouteValidator'

const CustomRoutes = () => (
  <>
    <Routes>
      {routes.map(({ path, key, ...props }) => {
        return (
          <Route
            path={path}
            key={key}
            exact
            element={<RouteValidator path={path} {...props} />}
          />
        )
      })}
      {/* <Route
        path='*'
        element={<AuthenticationValidator Component={NotFound} />}
      /> */}
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </>
)

export default CustomRoutes
