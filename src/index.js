import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/App.css'
import { Routing } from './routes/Routing'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Routing />
    </Provider>,
)
