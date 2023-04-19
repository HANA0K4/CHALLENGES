import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavComponent } from './hooks/challenge-11/NavComponent'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <NavComponent />
  </BrowserRouter>
  


)
