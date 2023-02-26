import React from 'react'
import ReactDOM from 'react-dom/client'
import { Handle } from './Components/Handle'
import './styleHandle.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Handle value = {1}/>
  </React.StrictMode>
)
