import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReUseHero from '../components/ReUseHero.jsx';

const Checkout = () => {
  let data = useSelector((state) => state.cartItemManager.cartItems);
  console.log(data);

  let subtotal = data.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <section>
      <ReUseHero heading="Checkout Page" />
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="font-josef flex flex-col md:flex-row justify-between gap-8 pb-10">
            
            {/* Left Section - Checkout Form */}
            <div className="w-full md:w-[770px] bg-[#F8F8FD] p-6 md:p-8 rounded-lg">
              <h3 className="font-bold text-2xl md:text-3xl">Checkout Page</h3>
              <h5 className="pt-2 pb-3 text-gray-600">Cart / Information / Shipping / Payment</h5>

              <h2 className="pb-4 font-bold text-2xl">Contact Information</h2>
              <input className="w-full p-2 border-b-2 outline-none bg-transparent" type="text" placeholder="Email or Mobile Phone Number" />
              
              <div className="flex items-center gap-2 py-4">
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter" className="text-gray-600 text-sm">Keep me updated on news and exclusive offers</label>
              </div>

              <h1 className="pb-4 text-2xl font-bold">Shipping Address</h1>
              <div className="flex flex-col md:flex-row gap-4">
                <input className="w-full p-2 border-b-2 outline-none bg-transparent" type="text" placeholder="First name (optional)" />
                <input className="w-full p-2 border-b-2 outline-none bg-transparent" type="text" placeholder="Last name" />
              </div>
              <input className="w-full p-2 border-b-2 outline-none bg-transparent mt-4" type="text" placeholder="Address" />
              <input className="w-full p-2 border-b-2 outline-none bg-transparent mt-4" type="text" placeholder="Apartment, suite, etc. (optional)" />
              <input className="w-full p-2 border-b-2 outline-none bg-transparent mt-4" type="text" placeholder="City" />
              
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <input className="w-full p-2 border-b-2 outline-none bg-transparent" type="text" placeholder="Bangladesh" />
                <input className="w-full p-2 border-b-2 outline-none bg-transparent" type="text" placeholder="Postal Code" />
              </div>

              <div className="pt-6">
                <Link to="/shop">
                  <button className="w-full md:w-auto px-6 py-3 bg-[#FB2E86] text-white rounded-md text-lg">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section - Cart Summary */}
            <div className="w-full md:w-1/3">
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-6 border-b">
                  <img src={item.thumbnail} alt="" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-lg">{item.title}</h2>
                    <h3 className="text-gray-600 text-sm">Color: Brown</h3>
                    <h3 className="text-gray-600 text-sm">Size: XL</h3>
                  </div>
                  <h3 className="text-lg font-bold">${item.price.toFixed(2)}</h3>
                </div>
              ))}

              <div className="mt-6 p-6 bg-[#F4F4FC] rounded-lg">
                <h1 className="text-xl md:text-2xl font-bold text-[#1D3178] text-center">Cart Totals</h1>
                <div className="flex justify-between border-b-2 py-3">
                  <h3 className="text-lg">Subtotal:</h3>
                  <h3 className="text-lg font-bold">${subtotal.toFixed(2)}</h3>
                </div>
                <div className="flex justify-between border-b-2 py-3">
                  <h3 className="text-lg">Total (incl. shipping):</h3>
                  <h3 className="text-lg font-bold">${(subtotal + 100).toFixed(2)}</h3>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <input type="checkbox" id="shipping" />
                  <label htmlFor="shipping" className="text-gray-600 text-sm">Shipping & taxes calculated at checkout</label>
                </div>

                <Link to="/checkout">
                  <button className="w-full px-6 py-3 bg-[#19D16F] text-white rounded-md text-lg">
                    Proceed To Checkout
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;