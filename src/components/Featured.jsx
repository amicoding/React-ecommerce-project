import React, { useContext } from 'react';
import { apiData } from './ContextApi.jsx';
import Slider from 'react-slick';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { FaSearchPlus, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-20px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-2 rounded-full z-10"
    onClick={onClick}
  >
    <FaArrowAltCircleLeft className="text-white text-xl md:text-2xl" />
  </button>
);

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-20px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-2 rounded-full z-10"
    onClick={onClick}
  >
    <FaArrowAltCircleRight className="text-white text-xl md:text-2xl" />
  </button>
);

const Featured = () => {
  const data = useContext(apiData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToShow: 1,  // Default for mobile
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280, // Large screen
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="px-5 md:px-10 lg:px-20">
      <div className="mt-6 mb-8">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#1A0B5B] mb-10">
            Featured Products
          </h2>
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="shadow-lg w-full max-w-[280px] mx-auto mb-5 relative hover:bg-[#2F1AC4] transition-all duration-700 group"
              >
                {/* Image Container */}
                <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                  <div className="absolute left-3 top-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
                      <IoCartOutline className="text-[#2F1AC4] text-lg" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
                      <CiHeart className="text-[#2F1AC4] text-lg" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
                      <FaSearchPlus className="text-[#2F1AC4] text-lg" />
                    </div>
                  </div>
                  <img className="max-w-[150px]" src={item.thumbnail} alt={item.title} />
                  <button
                    className="absolute top-[58%] py-1 px-2 font-bold bg-[#08D15F] text-white hidden group-hover:block transition duration-700"
                  >
                    View Details
                  </button>
                </div>

                {/* Product Info */}
                <div className="text-center py-2">
                  <h2 className="font-bold text-[18px] text-[#FB2E86] group-hover:text-white">
                    {item.title}
                  </h2>
                  <h5 className="text-[14px] text-[#151875] py-1 group-hover:text-white">
                    Code-88776hg
                  </h5>
                  <p className="text-[14px] text-[#151875] group-hover:text-white">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Featured;