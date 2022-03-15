import AppRoutes from 'routes'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { theme } from 'theme/theme'
import { store } from 'redux-thunk/store'
import { AppToaster } from 'components/ui-kit/AppToaster/AppToaster'
import { REMEMBER_ME, TOKEN } from 'utils/constants/constants'

function App () {
  window.onbeforeunload = () => {
    if (!localStorage.getItem(REMEMBER_ME)) {
      localStorage.removeItem(TOKEN)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppToaster />
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  )
}

export default App
