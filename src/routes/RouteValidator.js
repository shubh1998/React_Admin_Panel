import PropTypes from 'prop-types'
import { MainLayout } from '../components/layout/MainLayout/MainLayout'
import { useAuthGuard } from '../utils/custom-hooks/guards/useAuthGuard'

const RouteValidator = ({ hasAuth, component: Component, ...props }) => {
  const auth = useAuthGuard()
  let JSXComponent = <Component />

  if (auth) {
    if (hasAuth) {
      JSXComponent = (
        <MainLayout>
          <Component />
        </MainLayout>
      )
    } else {
      JSXComponent = <Component />
    }
  } else {
    JSXComponent = <Component />
  }

  return JSXComponent
}

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasAuth: PropTypes.bool,
  path: PropTypes.string
}

export default RouteValidator
