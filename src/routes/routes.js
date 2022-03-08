import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages/NotFound/NotFound'
import routes from './routerList'
import RouteValidator from './RouteValidator'

let allRoutes = []
routes.forEach(a => {
  const route = a
  if (a.subMenus.length) {
    allRoutes = [...allRoutes, ...a.subMenus]
  }
  allRoutes.push(route)
})

const CustomRoutes = () => (
  <>
    <Routes>
      {allRoutes.map(({ path, key, ...props }) => {
        return (
          <Route
            path={path}
            key={key}
            exact
            element={<RouteValidator path={path} {...props} />}
          />
        )
      })}
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </>
)

export default CustomRoutes
