import PropTypes from 'prop-types'
import { AppBar, StyledToolbar } from './AppHeader.styles'

export const AppHeader = ({ left, right, open = true, handleDrawer = () => {} }) => {
  return (
    <AppBar
      position='fixed'
      color='default'
      open={open}
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
  open: true,
  handleDrawer: () => {},
  left: 'null',
  right: 'null'

}

AppHeader.propTypes = {
  open: PropTypes.bool,
  handleDrawer: PropTypes.func,
  left: PropTypes.element,
  right: PropTypes.element
}
