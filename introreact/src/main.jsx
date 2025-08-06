import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(   // o render que renderiza o componente App dentro do elemento com id 'root'
  <StrictMode>
    <App />
  </StrictMode>,
)
