import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, increment, decrement, clearCart } from "../components/slices/CartSlice.js";
import ReUseHero from "../components/ReUseHero.jsx";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const data = useSelector((state) => state.cartItemManager.cartItems);
  const dispatch = useDispatch();

  const handleDelete = (index) => dispatch(deleteItem(index));
  const handleIncrement = (index) => dispatch(increment(index));
  const handleDecrement = (index) => dispatch(decrement(index));
  const deleteAllCartItem = () => dispatch(clearCart());

  let subtotal = data.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section>
      <ReUseHero heading="Shopping Cart" />
      <div className="container mx-auto px-4 py-8">
        {data.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-3/4">
              <div className="hidden md:grid grid-cols-4 gap-4 font-bold text-lg pb-4 border-b">
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Total</h1>
              </div>

              {data.map((item, index) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 border-b items-center">
                  {/* Product Details */}
                  <div className="flex items-center gap-4">
                    <MdDeleteForever onClick={() => handleDelete(index)} className="text-red-600 text-4xl cursor-pointer" />
                    <img className="w-16 h-16 object-cover rounded-md" src={item.thumbnail} alt={item.title} />
                    <div>
                      <h1 className="text-lg font-medium">{item.title}</h1>
                      <p className="text-sm text-gray-500">Color: Brown | Size: XL</p>
                    </div>
                  </div>

                  {/* Price */}
                  <h1 className="text-lg font-medium">${item.price}</h1>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <h1 className="w-10 text-center bg-gray-200 py-1">{item.qty}</h1>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price */}
                  <h1 className="text-lg font-medium">${(item.price * item.qty).toFixed(2)}</h1>
                </div>
              ))}

              {/* Cart Actions */}
              <div className="flex flex-col sm:flex-row justify-between pt-6">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg">Update Cart</button>
                <button onClick={deleteAllCartItem} className="bg-red-500 text-white px-6 py-2 rounded-md text-lg">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="w-full lg:w-1/4 bg-gray-100 p-6 rounded-md">
              <h1 className="text-2xl font-bold text-center mb-6">Cart Totals</h1>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <h3 className="text-lg">Subtotals:</h3>
                  <h3 className="text-lg">${subtotal.toFixed(2)}</h3>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <h3 className="text-lg">Total:</h3>
                  <h3 className="text-lg">${(subtotal + 5).toFixed(2)}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="tax-info" />
                  <label htmlFor="tax-info" className="text-gray-600 text-sm">
                    Shipping & taxes calculated at checkout
                  </label>
                </div>
                <Link to="/checkout">
                  <button className="w-full bg-green-500 text-white py-2 rounded-md text-lg mt-4">
                    Proceed To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart Message
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-4xl font-bold">Cart is Empty</h2>
            <div className="flex gap-4">
              <Link className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg" to="/shop">
                Go to Shop
              </Link>
              <Link className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg" to="/">
                Go to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;