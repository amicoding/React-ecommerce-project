import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import ReUseHero from "../components/ReUseHero.jsx";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { apiData } from "../components/ContextApi.jsx";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from '../components/slices/CartSlice.js';

const ProductDetails = () => {
  const data = useContext(apiData);
  const { title } = useParams();
  const singleProductTitle = title?.replaceAll("-", " ") || "";
  const singleProduct = data?.find((item) => item.title === singleProductTitle);

  if (!data) return <p className="text-center text-lg">Loading data...</p>;
  if (!singleProduct) return <p className="text-center text-lg">Product not found.</p>;

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success("Added To Cart Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section>
      {/* Hero Section */}
      <ReUseHero heading="Product Details Page" />
      <div className="py-10 px-4">
        <div className="container mx-auto">
          {/* Responsive Product Layout */}
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Product Images */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnail */}
              <div className="flex justify-center">
                <img
                  className="w-full max-w-[375px] rounded-lg"
                  src={singleProduct.thumbnail}
                  alt="Product Thumbnail"
                />
              </div>
              {/* Extra Images */}
              <div className="flex flex-wrap gap-2 justify-center md:flex-col">
                {singleProduct.images?.map((img, index) => (
                  <img
                    key={index}
                    className="w-20 h-20 object-cover rounded-md"
                    src={img}
                    alt={`Product ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 space-y-4">
              {/* Product Title */}
              <h1 className="text-3xl font-semibold">{singleProduct.title}</h1>

              {/* Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} className="text-2xl text-yellow-500" />
                  ))}
                </div>
                <span className="text-gray-500">(22 Reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 text-lg font-medium">
                <span className="text-green-600">${singleProduct.price}</span>
                <del className="text-gray-500">${(singleProduct.price + 0.1).toFixed(2)}</del>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">{singleProduct.description}</p>

              {/* Additional Details */}
              <div className="space-y-2">
                <h3 className="font-medium">
                  Category: <span className="text-gray-600">{singleProduct.category}</span>
                </h3>
                <button
                  onClick={() => handleAddToCart(singleProduct)}
                  className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md transition-all hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </section>
  );
};

export default ProductDetails;