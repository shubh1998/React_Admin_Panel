import './assets/styles/App.css'
import AppRoutes from './routes'
import { store } from './redux-thunk/store'
import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
