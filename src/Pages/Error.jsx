import React from 'react'
import ErrorImg from '../assets/Error.png'

import ReUseHero from '../components/ReUseHero.jsx'
import FooterBannar from '../components/FooterBannar.jsx'
const Error = () => {
  return (
    
    <section>
      
      <div className="">
        
     <ReUseHero heading ='Page Not Found'/>
      <div className="container mx-auto">
        <div className="text-4xl">
        </div>
        <img className="" src={ErrorImg} alt="" />
        
        <FooterBannar/>

      </div>
    </div>
      
      
    </section>
  )
}

export default Error