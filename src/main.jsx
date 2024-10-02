import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewsContext from './context/NewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsContext>
    <App />
    </NewsContext>
  </StrictMode>
)
