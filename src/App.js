import './assets/styles/App.css'
import AppRoutes from './routes'
import { store } from './redux-thunk/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme'
import { AppToaster } from './components/ui-kit/atoms/AppToaster/AppToaster'

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
