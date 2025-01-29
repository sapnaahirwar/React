import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginContext from './LoginContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <LoginContext>
     <App />
  </LoginContext>
 
)
