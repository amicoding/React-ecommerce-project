import React from "react";
import { useSelector } from "react-redux";
import { CiMail, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  let cartData = useSelector((state) => state.cartItemManager.cartItems);

  return (
    <header className="bg-[#7E33E0] text-white py-3 font-josef sm:w-full">
      <div className="mx-auto container px-4 md:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <CiMail />
              <p>demo@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCall />
              <p>(12345)67890</p>
            </div>
          </div>

          {/* User & Cart Section */}
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {/* Language Selector */}
            <select className="bg-transparent text-white border-none cursor-pointer">
              <option className="bg-[#7E33E0]">English</option>
              <option className="bg-[#7E33E0]">Bangla</option>
              <option className="bg-[#7E33E0]">Arabic</option>
              <option className="bg-[#7E33E0]">Urdu</option>
            </select>

            {/* Currency Selector */}
            <select className="bg-transparent text-white border-none cursor-pointer">
              <option className="bg-[#7E33E0]">USD</option>
              <option className="bg-[#7E33E0]">BDT</option>
              <option className="bg-[#7E33E0]">SAR</option>
            </select>

            {/* Login */}
            <Link to="/login" className="flex items-center gap-2 hover:text-gray-200">
              <FaRegUser />
              <span>Login</span>
            </Link>

            {/* Wishlist */}
            <div className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
              <CiHeart />
              <span>Wishlist</span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center">
              <CiShoppingCart className="text-3xl" />
              {cartData.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartData.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;