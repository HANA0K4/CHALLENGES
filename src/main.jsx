import React from 'react'
import ReactDOM from 'react-dom/client'
import GifGrid from './Components/GifGrid'
import './styleGif.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifGrid category= 'lol'/>
  </React.StrictMode>
)
