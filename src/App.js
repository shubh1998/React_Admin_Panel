import AppRoutes from 'routes'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { theme } from 'theme/theme'
import { store } from 'redux-thunk/store'
import { AppToaster } from 'components/ui-kit/AppToaster/AppToaster'

function App () {
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
