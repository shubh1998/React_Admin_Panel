import AppRoutes from 'routes'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { AppLoader } from 'components/ui-kit/AppLoader/AppLoader'
import { AppToaster } from 'components/ui-kit/AppToaster/AppToaster'
import { LOADER_TYPE } from 'utils/constants/constants'

const App = () => {
  const pageLoading = useSelector((state) => state.auth.pageLoading)
  return (
    <>
      {
        pageLoading &&
          <StyledLoaderDiv>
            <AppLoader variant={LOADER_TYPE.SCALE} />
          </StyledLoaderDiv>
      }
      <StyledBodyContainer pageLoading={pageLoading}>
        <AppToaster />
        <AppRoutes />
      </StyledBodyContainer>
    </>
  )
}

const StyledLoaderDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'grid',
  placeItems: 'center',
  zIndex: 1
}))

const StyledBodyContainer = styled('div')(({ theme, pageLoading }) => (pageLoading
  ? {
      '-webkit-filter': 'blur(5px)',
      '-moz-filter': 'blur(5px)',
      '-ms-filter': 'blur(5px)',
      '-o-filter': 'blur(5px)',
      filter: 'blur(5px)'
    }
  : {}))

export default App
