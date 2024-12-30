
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import Shop from './Pages/Shop.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Checkout from './Pages/Checkout.jsx'
import Error from './Pages/Error.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
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
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<Error />} />
      <Route path="/product-details" element={<ProductDetails/>} />
    </Route>
    
    
    ))
 

  return (
    
      
     <>
       
       < RouterProvider router = {myRouter}/>
   
     </>
  )
}

export default App
