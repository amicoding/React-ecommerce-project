import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Sofa from "../assets/sofa.png";
import Bell from "../assets/bell.png";
import Sponsor1 from "../assets/sponsor1.png";
import Sponsor2 from "../assets/sponsor2.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[#F2F0FF] py-16 md:py-28 relative sm:w-full z-10">
      <img className="absolute top-0 left-0 w-40 md:w-60 -z-10" src={Bell} alt="" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Left Side Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h4 className="font-lato font-bold text-[#FB2E86] pb-3">Best Furniture For Your Castle....</h4>
            <h1 className="font-bold font-josef text-3xl md:text-[56px] pb-3">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="font-lato text-[#8A8FB9] text-[16px] pb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.
            </p>
            <Link to="/shop">
              <button className="bg-primary text-white font-josef font-semibold px-8 py-3 md:px-10 md:py-4">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right Side - Image Slider */}
          <div className="w-full md:w-[400px] max-w-xs md:max-w-md mx-auto">
            <Slider {...settings}>
              <div>
                <img src={Sofa} alt="Furniture" className="w-full object-cover" />
              </div>
              <div>
                <img src={Sponsor1} alt="Sponsor 1" className="w-full object-cover" />
              </div>
              <div>
                <img src={Sponsor2} alt="Sponsor 2" className="w-full object-cover" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;