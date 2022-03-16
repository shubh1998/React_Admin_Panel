import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/index.css'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'assets/translation'
import { appRoot } from 'assets/dom/domNodes'
import { Provider } from 'react-redux'
import { theme } from 'theme/theme'
import { store } from 'redux-thunk/store'
import { ThemeProvider } from '@mui/material'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  appRoot
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
