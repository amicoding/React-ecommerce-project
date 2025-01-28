import React, { useContext } from "react";
import ReUseHero from "../components/ReUseHero.jsx";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { apiData } from "../components/ContextApi.jsx";

const ProductDetails = () => {
  // Context to fetch API data
  const data = useContext(apiData);
  
  // Extract product details from URL parameters
  const product = useParams();
  const singleProductTitle = product?.title?.replaceAll("-", " ") || "";

  // Find the specific product based on the title
  const singleProduct = data?.find((item) => item.title === singleProductTitle);

  // Handle loading state
  if (!data) {
    return <p>Loading data...</p>;
  }

  // Handle case when product is not found
  if (!singleProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <section>
      {/* Hero Section */}
      <ReUseHero heading="ProductDetails Page" />
      <div className="pt-20 pb-20">
        <div className="container mx-auto">
          {/* Product Details */}
          <div className="flex gap-10 font-bold font-josef">
            {/* Left: Product Images */}
            <div className="flex">
              {/* Product Images */}
              {singleProduct.images?.map((img, index) => (
                <div key={index}>
                  <img className="p-2 w-20" src={img} alt={`Product ${index + 1}`} />
                </div>
              ))}
              {/* Main Thumbnail */}
              <div>
                <img className="p-2 w-[375px]" src={singleProduct.thumbnail} alt="Product Thumbnail" />
              </div>
            </div>

            {/* Right: Product Information */}
            <div className="pt-8">
              {/* Product Title */}
              <h1 className="text-4xl pt-2">{singleProduct.title}</h1>

              {/* Product Rating */}
              <div className="flex gap-4 pt-2">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} className="text-2xl bg-[#F9C016]" />
                  ))}
                </div>
                <div>(22)</div>
              </div>

              {/* Product Price */}
              <div className="flex gap-5 pt-2">
                <div>${singleProduct.price}</div>
                <div>
                  <del>${(singleProduct.price + 0.1).toFixed(2)}</del>
                </div>
              </div>

              {/* Product Color */}
              <h2 className="pt-2">Colour</h2>

              {/* Product Description */}
              <h4 className="pt-2 w-[549px]">{singleProduct.description}</h4>

              {/* Other Details */}
              <h3 className="pt-2">Add To Cart</h3>
              <h3 className="pt-2">Category: {singleProduct.category}</h3>
              <h3 className="pt-2">Share</h3>
              <h3 className="pt-2">Tags</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;