import './assets/styles/App.css'
import AppRoutes from './routes'
import { store } from './redux-thunk/store'
import { Provider } from 'react-redux'
import { AppToaster } from './components/ui/AppToaster/AppToaster'

function App () {
  return (
    <Provider store={store}>
      <AppToaster />
      <AppRoutes />
    </Provider>
  )
}

export default App
