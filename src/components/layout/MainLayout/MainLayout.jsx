import PropTypes from 'prop-types'
import { CssBaseline, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main, StyledBox, StyledMainLayoutChildren } from './styles/MainLayout.styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect } from 'react'
import { handleDrawerHamValue } from 'redux-thunk/redux/Ham/hamSlice'

export const MainLayout = ({ children }) => {
  const openHam = useSelector((state) => state.ham.openHam)
  const matches = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  const dispatch = useDispatch()

  useEffect(() => {
    if (matches) {
      dispatch(handleDrawerHamValue(false))
    }
  }, [dispatch, matches])

  return (
    <StyledBox display='flex'>
      <CssBaseline />
      <Header />
      <Sidebar isMobileView={matches} />
      <StyledBox
        component={Main}
        open={!matches ? openHam : true}
        flexGrow={1}
        padding={3}
        height='100vh'
      >
        <Toolbar />
        <StyledMainLayoutChildren>
          {children}
        </StyledMainLayoutChildren>
      </StyledBox>
    </StyledBox>
  )
}

MainLayout.defaultProps = {
  children: 'null'

}

MainLayout.propTypes = {
  children: PropTypes.element
}
