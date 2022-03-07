import PropTypes from 'prop-types'
import { CssBaseline, Toolbar } from '@mui/material'
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main, StyledBox } from './styles/MainLayout.styles'

export const MainLayout = ({ children }) => {
  const openHam = useSelector((state) => state.ham.openHam)
  return (
    <div className='App'>
      <StyledBox display='flex'>
        <CssBaseline />
        <Header />
        <Sidebar />
        <StyledBox
          component={Main}
          open={openHam}
          flexGrow={1}
          padding={3}
          height='100vh'
        >
          <Toolbar />
          <div style={{ width: '100%', padding: '30px' }}>
            {children}
          </div>
        </StyledBox>
      </StyledBox>
    </div>
  )
}

MainLayout.defaultProps = {
  children: 'null'

}

MainLayout.propTypes = {
  children: PropTypes.element
}
