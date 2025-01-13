import React from 'react'
import { useSelector } from 'react-redux'
import ReUseHero from '../components/ReUseHero.jsx'

const Cart = () => {


 let data = useSelector((state)=>state.cartItemManager.cartItems)
 
 


  return (
    
    <section>
      
      <ReUseHero heading= 'Shoping Cart'/>
    
    <div className="container mx-auto">
     
     <div className="flex">
       
       <div className="">
         
         
         
     
     
     
    {
      data.map((item)=>(
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
                <img className="" src={item.thumbnail} alt="" />
              </div>
              <div className="">
                <h1 className="">{item.title}</h1>
                <p>Color: Brown </p>
                <p>Size: XL </p>
              </div>
          </div>
          
          <div className="">
          <h1>${item.price}</h1>
        </div>
        <div className="flex">
          <button className="bg-[#BEBFC2] flex items-center justify-center text-3xl text-white
          font-bold h-6 w-5" type="submit">-</button>
           <h1 className="w-[51px] h-6 text-center bg-[#f0e9e9] ">{item.qty}</h1>
           <button className="bg-[#BEBFC2] flex items-center justify-center text-white  font-bold h-6 w-5" type="submit">+</button>
           
        </div>
        <div className="">
          <h1>$100.00</h1>
        </div>
         
             
          </div>
      ))
    }
         
         
         
         
         
         
          
          <div className="flex justify-between">
            <div className="">
              <button className="bg-[#FB2E86] text-white font-josef text-2xl p-2 rounded mt-10 mb-10" type="submit">Update Cart</button>
            </div>
            <div className="">
              <button className="bg-[#FB2E86] text-white font-josef text-2xl p-2 rounded mt-10 mb-10 mr-40" type="submit">Clear Cart</button>
            </div>
          </div>
         
       </div>
       <div className="mt-8 mb-6 font-josef">
         <h1 className="font-josef text-3xl mb-10 font-bold text-[#1D3178] flex items-center justify-center">Cart Totals</h1>
         <div className="bg-[#F4F4FC] w-[371px] h-[284px] relative">
           <div className=" flex justify-between border-b-4">
             <h3 className="text-2xl p-4">Subtotals</h3>    <h3 className="text-2xl p-4">$32</h3>
           </div>
           <div className=" flex justify-between border-b-4">
             <h3 className="text-2xl p-4">Totals</h3>    <h3 className="text-2xl p-4">$32</h3>
           </div>
           <div className="flex gap-4 p-4">
             <input type="checkbox" name="" id="" value="" />
           <h5 className="text-[#8A91AB]">Shipping & taxes calculated at checkout</h5>
           </div>
           
           <button className=" bg-[#19D16F] text-white font-josef p-2 absolute left-24
           bottom-8
           " type="submit">Proceed To Checkout</button>
         </div>
       </div>
        
     </div>
           
        </div>
       
      
    </section>
    
  )
}

export default Cart