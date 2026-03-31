import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Title from './Title.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title></Title>
    <App />
  </StrictMode>,
)
