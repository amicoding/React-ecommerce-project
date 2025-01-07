import React, { useContext } from 'react';
import { apiData } from './ContextApi.jsx';
import Slider from 'react-slick';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { FaSearchPlus, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FB2E86',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      zIndex: 1,
      left: '-45px',
      position: 'absolute', // Ensure it's placed properly
    }}
    onClick={onClick}
  >
    <FaArrowAltCircleLeft style={{ color: '#fff', fontSize: '20px' }} />
  </div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FB2E86',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      zIndex: 1,
      right: '-45px',
      position: 'absolute', // Ensure it's placed properly
    }}
    onClick={onClick}
  >
    <FaArrowAltCircleRight style={{ color: '#fff', fontSize: '20px' }} />
  </div>
);

const Featured = () => {
  const data = useContext(apiData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    arrows: true, // Make sure arrows are enabled
  };

  return (
    <section>
      <div className="mt-6 mb-8">
        <div className="container mx-auto">
          <div>
            <h2 className="font-bold font-josef text-[46px] text-[#1A0B5B] text-center mb-10">
              Featured Products
            </h2>
          </div>
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="shadow-lg !w-[95%] mb-5 relative hover:bg-[#2F1AC4] duration-700 group max-w-[270px] max-h-[361px]"
              >
                <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                  <div className="flex gap-2 absolute left-3 top-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out cursor-pointer">
                    <div className="w-10 h-10 hover:bg-white rounded-full flex items-center justify-center">
                      <IoCartOutline className="text-[#2F1AC4] text-lg" />
                    </div>
                    <div className="w-10 h-10 hover:bg-white rounded-full flex items-center justify-center">
                      <CiHeart className="text-[#2F1AC4] text-lg" />
                    </div>
                    <div className="w-10 h-10 hover:bg-white rounded-full flex items-center justify-center">
                      <FaSearchPlus className="text-[#2F1AC4] text-lg" />
                    </div>
                  </div>
                  <img className="max-w-[150px]" src={item.thumbnail} alt={item.title} />
                  <button
                    className="absolute top-[58%] py-1 px-2 font-josef bg-[#08D15F] text-white hidden group-hover:block duration-1000"
                    type="button"
                  >
                    View Details
                  </button>
                </div>
                <div className="text-center py-2">
                  <h2 className="font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white">
                    {item.title}
                  </h2>
                  <h5 className="font-josef font-normal text-[14px] text-[#151875] py-1 group-hover:text-white">
                    Code-88776hg
                  </h5>
                  <p className="font-josef font-normal text-[14px] text-[#151875] group-hover:text-white">
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