import PropTypes from 'prop-types'
import { useAuthGuard } from '../custom-hooks/guards/useAuthGuard'
import { MainLayout } from '../components/MainLayout/MainLayout'

const RouteValidator = ({ hasNavbar, component: Component, ...props }) => {
  const auth = useAuthGuard()
  let JSXComponent = <Component />

  if (auth) {
    if (hasNavbar) {
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
  hasNavbar: PropTypes.bool,
  path: PropTypes.string
}

export default RouteValidator
