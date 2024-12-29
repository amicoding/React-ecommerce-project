
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import Shop from './Pages/Shop.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import RootLayout from './components/RootLayout.jsx'


function App() {

  let myRouter = createBrowserRouter(createRoutesFromElements(
    
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Products/>} />
      <Route path="/about" element={<About />} />
    </Route>
    
    
    ))
 

  return (
    
      
     <>
       
       < RouterProvider router = {myRouter}/>
   
     </>
  )
}

export default App
