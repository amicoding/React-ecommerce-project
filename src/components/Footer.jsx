import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#EEEFFB] ">
        
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between py-8">
          {/* Logo and Contact Info */}
          <div className="max-w-sm">
            <h1 className="font-josef font-bold text-[38px] pb-5">Hekto</h1>
            <form className="flex gap-2">
              <input
                className="py-1.5 px-4 border rounded outline-none w-full"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="bg-[#FB2E86] px-10 py-1.5 font-lato text-white text-[16px] rounded"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <address className="pt-4 not-italic">
              <h4 className="font-bold">Contact Info</h4>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </address>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-bold text-lg pb-4">Categories</h2>
            <ul className="space-y-2">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h2 className="font-bold text-lg pb-4">Customer Care</h2>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h2 className="font-bold text-lg pb-4">Pages</h2>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

      </div>
      
        {/* Footer Bottom */}
        <div className="bg-[#E7E4F8] flex justify-between items-center py-4 px-40 ">
          <p className="text-sm">©ami - All Rights Reserved</p>
          <div className="flex gap-4 text-lg">
            <BsFacebook />
            <FaInstagramSquare />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;