import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReUseHero from '../components/ReUseHero.jsx'
import demoPic from '../assets/demo.png'

const Checkout = () => {
  
  
   let data = useSelector((state)=>state.cartItemManager.cartItems)
console.log(data);
   let subtotal = 0;
 for(let i=0; i<data.length; i++){
  
   let item = data[i];
   subtotal += (item.price*item.qty);
  
   
 }

  return (
    
    <section>
      <ReUseHero heading= 'Checkout Page'/>
      <div className="pt-32">
        
      <div className="container mx-auto">
        <div className="font-josef flex justify-between pb-20">
          
          <div className="">
            <h3 className="font-bold text-3xl">Checkout Page</h3>
            <h5 className="pt-2 pb-3">Cart/Information/Shipping/Payment</h5>
            <div className="bg-[#F8F8FD] w-[770px] h-[920px] p-8">
              <h2 className="pb-4 font-bold text-3xl pt-4">Contact Information</h2>
              <input className="pb-2 w-full pl-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="Email or Mobile Phone Number" />
                <div className="flex pb-4 gap-4 p-4">
             <input type="checkbox" name="" id="" value="" />
           <h5 className="text-[#8A91AB]">Keep me up to date on news and excluive offers</h5>
           </div>
             <h1 className="pb-4 font-josef text-3xl font-bold">Shipping Address</h1>
           <div className="flex justify-between pb-4">
             <input className=" pl-2 pb-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="First name (optional)" />
             <input className=" pl-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="Last name" />
           </div>
            <input className="w-full pl-2 outline-none pb-2 bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="Address " />
            <input className="w-full pt-4 pb-2 pl-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="Appaetnentment,suit,e.t.c (optinal) " />
            <input className="w-full pb-2 pt-4 pl-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="City " />
            
            <div className="flex justify-between pt-4">
             <input className=" pl-2 pb-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="Bangladesh " />
             <input className=" pl-2 pb-2 outline-none bg-[#F8F8FD] border-b-2" type="text" name="" id="" placeholder="Postal Code" />
            </div>
            <div className="pt-20">
             <Link to="/shop">  <button className=" bg-[#FB2E86] text-white font-josef p-2
           " type="submit">Continue Shopping</button></Link></div>
           
           </div>
          </div>
          
          <div className="">
            
            {
            
            data.map((item)=>(
             
             <div className="flex justify-between pb-10">
             <div className="">
               <img src={item.thumbnail} alt="" />
             </div> 
             <div className="">
               <h2>{item.title}</h2>
               <h2>Color: Brown</h2>
               <h2>Size: XL</h2>
             </div> 
             <div className="">
               <h3>{item.price}</h3>
             </div> 
            </div>
             
            
            ))
            
            }
            
            
            
             <div className="mt-8 mb-6 font-josef">
         <h1 className="font-josef text-3xl mb-10 font-bold text-[#1D3178] flex items-center justify-center">Cart Totals</h1>
         <div className="bg-[#F4F4FC] w-[371px] h-[284px] relative">
           <div className=" flex justify-between border-b-4">
             <h3 className="text-2xl p-4">Subtotals:</h3>    <h3 className="text-2xl p-4">${subtotal.toFixed(2)}</h3>
           </div>
           <div className=" flex justify-between border-b-4">
             <h3 className="text-2xl p-4">Totals</h3>    <h3 className="text-2xl p-4">${(subtotal+100).toFixed(2)}</h3>
           </div>
           <div className="flex gap-4 p-4">
             <input type="checkbox" name="" id="" value="" />
           <h5 className="text-[#8A91AB]">Shipping & taxes calculated at checkout</h5>
           </div>
           
         <Link to="/checkout">  <button className=" bg-[#19D16F] text-white font-josef p-2 absolute left-24
           bottom-8
           " type="submit">Proceed To Checkout</button></Link>
         </div>
       </div>
          </div>
          
        </div>
      </div>
    </div>
      
      
    </section>
  )
}

export default Checkout