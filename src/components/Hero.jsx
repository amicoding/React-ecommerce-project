import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Sofa from "../assets/sofa.png"
import Bell from "../assets/bell.png"
import Sponsor1 from "../assets/sponsor1.png"
import Sponsor2 from "../assets/sponsor2.png"


const Hero = () => {
  
  const settings = {
   dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    
    autoplaySpeed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  
  
  return (
    <section className="bg-[#F2F0FF] py-28 z-30 relative sm:w-full">
      <img className="absolute top-0 left-0 w-60 -z-10" src={Bell} alt="" />
      <div className="container mx-auto">
        
        <div className="flex justify-between items-center">
          
          <div className="">
            <h4 className="font-lato font-bold text-[#FB2E86] pb-3 ml-44">Best Furniture For Your Castle....</h4>
            <h1 className="font-bold font-josef font-bold text-[56px] pb-3 ml-44">New Furniture Collection
            Trends in 2020</h1>
            <p className="font-lato font-bold text-[#8A8FB9] text-[16px] pb-7 pr-2 ml-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.</p>
             <button className="bg-primary text-white font-josef font-semibold px-10 py-4 ml-44" type="submit"><Link  to='/shop'>Shop Now</Link></button>
          </div>
          
          <div className="w-[400px]  ">
            
            <Slider {...settings}>
        <div>
         
            <img src={Sofa} alt="img" />
        </div>
        <div>
         
            <img src={Sponsor1} alt="img" />
        </div>
        <div>
          
            <img src={Sponsor2} alt="img" />
        </div>
      </Slider>
           
        </div>
        
       
      </div>
      </div>
    </section>
  )
}

export default Hero