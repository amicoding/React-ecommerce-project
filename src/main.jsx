import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ContextApi} from './components/ContextApi.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './store.js'
import { Provider } from 'react-redux'
  
  
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
      <ContextApi>
       <App />
    </ContextApi>
    </Provider>
   
  </StrictMode>,
)
