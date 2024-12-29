
import React, {useContext} from 'react'
import productImg from '../assets/product.png'
import {apiData} from "./ContextApi.jsx"

import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";



const Featured = () => {
  
  const data = useContext(apiData)
   
 
  return (
    <section>
      <div className="mt-6">
        <div className="container mx-auto">
          
          <div className="">
            <h2 className="font-bold font-josef text-[46px] text-[#1A0B5B] text-center"> Featured Products </h2>
              </div>
              
          <div className="flex flex-wrap justify-between ">
            
            {data.map((items)=>(
            
        <div className="shadow-lg w-[23%] mb-5 relative hover:bg-[#2F1AC4] duration-700 group max-w-[270px] max-h-[361px]">
               
              <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
          
          <div className="flex gap-2 absolute left-3 top-6 opacity-0 hover:left-5 hover:opacity-100 duration-500 ease-in-out cursor-pointer group-hover:opacity-100">
            <div className="w-10 h-10 hover:bg-white rounded-full flex items-center justify-center">
              <IoCartOutline className="text-[#2F1AC4] text-lg"/>
            </div>
            <div className="w-10 h-10 hover:bg-white rounded-full flex items-center justify-center">
              <CiHeart className="text-[#2F1AC4] text-lg"/>
            </div>
            <div className="w-10 h-10 hover:bg-white rounded-full flex items-center justify-center">
              <FaSearchPlus className="text-[#2F1AC4] text-lg"/>
            </div>
          </div>
                <img className="max-w-[150px]" src={items.thumbnail} alt="" />
                
                
                <button className="absolute top-[58%] py-1 px-2 font-josef bg-[#08D15F] text-white hidden group-hover:block duration-1000 " type="submit">View Details</button>
                
              </div>
              
              <div className="text-center py-2 ">
                
                <h2 className="font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white">{items.title}</h2>
                
                <h5 className="font-josef font-normal text-[14px] text-[#151875] py-1 group-hover:text-white">Code-88776hg</h5>
                
                <p className="font-josef font-normal text-[14px] text-[#151875] group-hover:text-white">{items.price}</p>
                
              </div>
              
            </div>
            
            ))}
           
          
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Featured