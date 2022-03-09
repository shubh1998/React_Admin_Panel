import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages/NotFound/NotFound'
import { routerList } from './routerList'
import RouteValidator from './RouteValidator'

let allRoutes = []
routerList.forEach(section => {
  section.sectionChilds.forEach(route => {
    if (route.subMenus.length) {
      allRoutes = [...allRoutes, ...route.subMenus]
    }
    allRoutes.push(route)
  })
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
