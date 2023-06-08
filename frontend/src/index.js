import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routing } from './routes/Routing'
import './assets/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
