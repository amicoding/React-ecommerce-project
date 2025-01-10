import React from 'react'
import demoImg from '../assets/demo.png'
import ReUseHero from '../components/ReUseHero.jsx'

const Cart = () => {
  return (
    
    <section>
      
      <ReUseHero heading= 'Shoping Cart'/>
    
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
          <button className="bg-[#BEBFC2] flex items-center justify-center text-3xl text-white
          font-bold h-6 w-5" type="submit">-</button>
           <h1 className="w-[51px] h-6 text-center bg-[#f0e9e9] ">1</h1>
           <button className="bg-[#BEBFC2] flex items-center justify-center text-white  font-bold h-6 w-5" type="submit">+</button>
           
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