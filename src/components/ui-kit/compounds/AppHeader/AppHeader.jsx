import PropTypes from 'prop-types'
import { AppBar, StyledToolbar } from './AppHeader.styles'

export const AppHeader = ({ left, right, openDrawer = true, handleDrawer = () => {} }) => {
  return (
    <AppBar
      position='fixed'
      color='default'
      open={openDrawer}
    >
      <StyledToolbar>
        <div>
          {left}
        </div>
        <div>
          {right}
        </div>
      </StyledToolbar>
    </AppBar>
  )
}

AppHeader.defaultProps = {
  openDrawer: true,
  handleDrawer: () => {},
  left: 'null',
  right: 'null'

}

AppHeader.propTypes = {
  openDrawer: PropTypes.bool,
  handleDrawer: PropTypes.func,
  left: PropTypes.element,
  right: PropTypes.element
}
