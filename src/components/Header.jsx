import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    
    <header className="bg-[#7E33E0] text-white py-3 font-josef ">
      
      <div className="mx-auto container">
        
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <CiMail/>
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <IoIosCall/>
          <p>(12345)67890</p>
        </div>
        </div>
        
        
        
        <div className="">
          
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-2">
              <select className="bg-transparent">
                <option className="bg-[#7E33E0]">English<FaAngleDown/></option>
                <option className="bg-[#7E33E0]">Bangla<FaAngleDown/></option>
                <option className="bg-[#7E33E0]">Arabic<FaAngleDown/></option>
                <option className="bg-[#7E33E0]">Urdu<FaAngleDown/></option>
              </select>
            </li>
            <li className="flex items-center gap-2">
              <select className="bg-transparent">
                <option value="" className="bg-[#7E33E0]">USD<FaAngleDown/></option>
                <option className="bg-[#7E33E0]">BDT<FaAngleDown/></option>
                <option className="bg-[#7E33E0]">SAR<FaAngleDown/></option>
              </select>
            </li>
            <li className="flex items-center gap-2">Login<FaRegUser/></li>
            <li className="flex items-center gap-2">Wishlist<CiHeart/></li>
            <li className="flex items-center gap-2"><CiShoppingCart className="text-4xl"  /></li>
          </ul>
          
        </div>
        
        </div>
        
        
      </div>
      
    </header>     
    
      
    
  );
};

export default Header;