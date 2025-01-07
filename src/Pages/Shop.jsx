import React, {useContext, useState, useEffect} from 'react'
import FooterBannar from '../components/FooterBannar.jsx'
import {apiData} from "../components/ContextApi.jsx"
import ShopGrid from '../components/ShopGrid.jsx'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const Shop = () => {

  const data = useContext(apiData)
   
   let[category, setCategory] = useState([]);
   
   useEffect(() =>{
      
      setCategory([...new Set(data.map((item)=>item.category))])
   }, [data])
   
   
   let[categoryItems, setCategoryItem] = useState([]);
   
   const handleCategory = (categorys)=>{
     
     let filterProducts = data.filter((item)=>item.category === categorys)
         
         
         setCategoryItem(filterProducts)
   
   }
   
   let[categoriShow, setCategoriShow] = useState(false);

  return (
  <section>
    <ShopGrid/>
    <div className="pt-4">
        
      <div className="container mx-auto">
        
        <div className="flex justify-between justify-center items-center gap-1 font-josef">
          <div className="font-josef font-bold">
            <h2 className="text-2xl">Ecommerce Acceories & Fashion item </h2>
            <h6>About 9,620 results (0.62 seconds)</h6>
          </div>
          <div className="flex">
            <h2>Per Page:</h2>
            <input className="outline-none border-2 w-14" type="text" name="" id="" value="" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <h2>Sort By:</h2>
            <select className='text-[#3F509E] text-[16px] font-lato font-normal border-2 py-1 outline-none ps-2' name="" id="">
              <option>Best Match</option>
              <option>Most Popular</option>
              <option>Featured</option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h2>View:</h2>
            <IoGrid />
            <FaList />
          </div>
          <div className="justify-center items-center flex">
            <input className="outline-none border-2 w-32" type="text" name="" id=""  />
          </div>
        </div>
        
        <div className="flex pt-4 gap-10">
          
          <div className="w-[20%]">
             <h1 onClick={()=>setCategoriShow(!categoriShow) } className="flex items-center gap-4 font-bold text-2xl font-josef">Shop By Category
              <FaAngleDown />
             </h1>
             
             {
             categoriShow && <ul className="h-40 overflow-y-scroll p-3">
               
                 {category.map((item)=>(
                 <li onClick={() =>handleCategory(item) } className="capitalize cursor-pointer py-3 border-b-2">{item}</li>
                 ))
                 
                 }
              
             </ul>
             
             }
             
             
            
          </div>
          
          <div className="flex flex-wrap justify-between w-[80%]">
            
            
        {
        
        categoryItems.length>0 ?  
            categoryItems.map((items)=>(
        <div className="shadow-lg !w-[95%] mb-5 relative hover:bg-[#2F1AC4] duration-700 group max-w-[270px] max-h-[361px] ">
               
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
                
                <p className="font-josef font-normal text-[14px] text-[#151875] group-hover:text-white">${items.price}</p>
                
              </div>
              
            </div>
            ))
        
        :
        
        
             data.map((items)=>(
        <div className="shadow-lg !w-[95%] mb-5 relative hover:bg-[#2F1AC4] duration-700 group max-w-[270px] max-h-[361px] ">
               
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
                
                <p className="font-josef font-normal text-[14px] text-[#151875] group-hover:text-white">${items.price}</p>
                
              </div>
              
            </div>
            ))
        
         
        }
            
            
      
            
        </div>
       
        </div>
      
        </div>
       </div>
    <FooterBannar/>
    </section>
  )
}

export default Shop