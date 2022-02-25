import './assets/styles/App.css'
import AppRoutes from './routes'
import { store } from './redux-thunk/store'
import { Provider } from 'react-redux'
import { AppToaster } from './components/ui/AppToaster/AppToaster'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'

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
