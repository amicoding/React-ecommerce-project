import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteItem, increment, decrement, clearCart } from '../components/slices/CartSlice.js'
import ReUseHero from '../components/ReUseHero.jsx'
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {


 let data = useSelector((state)=>state.cartItemManager.cartItems)
 
 const dispatch = useDispatch()
 
 const handleDelete = (index)=>{
  
  dispatch(deleteItem(index))
 
 }
 const handleIncrement = (index)=>{
  
  dispatch(increment(index))
 
 }
 const handleDecrement = (index)=>{
  
  dispatch(decrement(index))
 
 }
 
 const deleteAllCartItem = ()=>{
  
  dispatch(clearCart())
 
 }
 
 
 let subtotal = 0;
 for(let i=0; i<data.length; i++){
  
   let item = data[i];
   subtotal += (item.price*item.qty);
  
   
 }


  return (
    
    <section>
      
      <ReUseHero heading= 'Shoping Cart'/>
    
    <div className="container mx-auto">
     
     {
       data.length>0? 
       
       <div className="flex">
       
       <div className="">
         
         
         
     
     
     
    {
      data.map((item, index)=>(
        <div key={item.id} className=" mt-8 grid grid-cols-4 gap-8  font-josef">
            
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
              <MdDeleteForever onClick={()=>handleDelete(index)} className="text-red-800 text-5xl" />
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
          <button onClick={()=>handleDecrement(index)} className="bg-[#BEBFC2] flex items-center justify-center text-3xl text-white
          font-bold h-6 w-5" type="submit">-</button>
           <h1 className="w-[51px] h-6 text-center bg-[#f0e9e9] ">{item.qty}</h1>
           <button onClick={()=>handleIncrement(index)} className="bg-[#BEBFC2] flex items-center justify-center text-white  font-bold h-6 w-5" type="submit">+</button>
           
        </div>
        <div className="">
          <h1>{(item.price*item.qty).toFixed(2)}</h1>
        </div>
         
             
          </div>
      ))
    }
         
         
         
         
         
         
          
          <div className="flex justify-between">
            <div className="">
              <button className="bg-[#FB2E86] text-white font-josef text-2xl p-2 rounded mt-10 mb-10" type="submit">Update Cart</button>
            </div>
            <div className="">
              <button onClick={deleteAllCartItem} className="bg-[#FB2E86] text-white font-josef text-2xl p-2 rounded mt-10 mb-10 mr-40" type="submit">Clear Cart</button>
            </div>
          </div>
         
       </div>
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
       
       :
       
       <div className="flex gap-4 justify-center items-center pt-10 font-josef">
         <h2 className="text-7xl pb-9">Cart is Empty</h2>
         <div className="pb-10">
           <Link className="text-4xl bg-blue-500 text-white p-3 pb-3" to='/shop'>Go to Shop</Link>
         </div>
         <div className="pb-10">
           <Link className="text-4xl bg-blue-500 text-white p-3 pb-3" to='/'>Go to Home</Link>
         </div>
       </div>
     }
           
        </div>
       
      
    </section>
    
  )
}

export default Cart