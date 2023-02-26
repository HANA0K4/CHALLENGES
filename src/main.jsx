import React from 'react'
import ReactDOM from 'react-dom/client'
import { CustomHook } from './Components/CustomHook'
import './styles/styleCounter.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomHook value = {1}/>
  </React.StrictMode>
)
