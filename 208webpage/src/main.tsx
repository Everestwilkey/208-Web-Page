import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.tsx'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
