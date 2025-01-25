import React from 'react'
import ReUseHero from '../components/ReUseHero.jsx'
import demoPic from '../assets/demo.png'
import { CiStar } from "react-icons/ci";

const ProductDetails = () => {
  return (
    <section>
      <ReUseHero heading='ProductDetails Page'/>
      
      <div className="pt-20 pb-20">
        
      <div className="container mx-auto">
        <div className="flex gap-10 font-bold font-josef">
          <div className="flex ">
            <div className="">
              <img className="p-2" src={demoPic} alt="" />
            <img className="p-2" src={demoPic} alt="" />
            <img className="p-2" src={demoPic} alt="" />
            </div>
            <div className="">
              <img className="p-2 w-[375px]" src={demoPic} alt="" />
            </div>
            
          </div>
          <div className="pt-8">
            <h1 className="text-4xl pt-2">Playwood arm chair</h1>
            <div className="flex gap-4 pt-2">
              <div className="flex gap-2">
                <CiStar className="text-2xl bg-[#F9C016] " />
              <CiStar className="text-2xl bg-[#F9C016] " />
              <CiStar className="text-2xl bg-[#F9C016] " />
              <CiStar className="text-2xl bg-[#F9C016] " />
              <CiStar className="text-2xl bg-[#F9C016] " />
              </div>
              <div className="">
                (22)
              </div>
            </div>
            <div className="flex gap-5 pt-2">
               <div className="">
                  $32.00
                </div>
                 <div className="">
                   <del>$32.00</del>
                   
                 </div>
            </div>
            
            <h2 className="pt-2">Colour</h2>
            <h4 className="pt-2 w-[549px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</h4>
            <h3 className="pt-2">Add To cart</h3>
            <h3 className="pt-2">Category</h3>
            <h3 className="pt-2">Share</h3>
            <h3 className="pt-2">Tags</h3>
   
          </div>
        </div>
      </div>
    </div>
      
      
    </section>
  )
}

export default ProductDetails