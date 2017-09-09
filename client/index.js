import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


import App from './app'

const root = document.getElementById('root')

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store = {store}>
            <App />
        </Provider>    
    </MuiThemeProvider>
    ,root
)