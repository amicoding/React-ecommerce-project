import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ContextApi} from './components/ContextApi.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
  
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ContextApi>
       <App />
    </ContextApi>
   
  </StrictMode>,
)
