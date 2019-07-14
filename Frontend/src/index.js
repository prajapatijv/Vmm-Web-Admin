import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import { HandleError } from './utility/status'

import './stylesheets/custom.scss'
import './stylesheets/index.scss'

import configureStore from './configureStore'
import { Env , Config } from './AppConfig'

import App from './App'


const store = configureStore({})

if (Config.ENV !== Env.Production) {
    window.React = React
    window.store = store
}

window.addEventListener("error", (err) => HandleError(err.message, store.dispatch))

ReactDOM.render(
    <Provider store={store}>
        <App config={Config} />
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
