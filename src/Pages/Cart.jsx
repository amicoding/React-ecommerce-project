import React from 'react'
import demoImg from '../assets/demo.png'

const Cart = () => {
  return (
    
    <section>
      
      <div className="bg-[#F2F0FF] h-[286px] flex items-center">
        
      <div className="container mx-auto">
        <div className="">
          
          <h1 className="font-josef text-4xl font-bold">Shopping Cart </h1>
          <ul className="flex gap-2 ">
            <li>Home</li>
            <li>Pages</li>
            <li className="text-primary">Shopping Cart</li>
          </ul>
          
        </div>
        
        
      </div>
    </div>
    
    <div className="container mx-auto">
     
        <div className=" mt-8 grid grid-cols-4 gap-8  font-josef">
            
            <div className="">
              <h1 className="">Product</h1>
             </div>
            <div className="">
              <h1 className=" ">Price</h1>
             </div>
            <div className="">
              <h1 className="">Quantity</h1>
             </div>
            <div className="">
              <h1 className="">Total</h1>
             </div>
             
           <div className="flex gap-2">
            
            <div className="">
                <img className="" src={demoImg} alt="" />
              </div>
              <div className="">
                <h1 className="">Ut diam consequat</h1>
                <p>Color: Brown </p>
                <p>Size: XL </p>
              </div>
          </div>
          
          <div className="">
          <h1>$32.00</h1>
        </div>
        <div className="flex">
          <button className="bg-red-400 text-white  font-bold h-6 w-4" type="submit">-</button>
           <h1 className="w-[51px] h-6 text-center bg-[#BEBFC2]">1</h1>
           <button className="bg-red-400 text-white  font-bold h-6 w-4" type="submit">+</button>
           
        </div>
        <div className="">
          <h1>$32.00</h1>
        </div>
         
             
          </div>
           
        </div>
       
      
    </section>
    
  )
}

export default Cart