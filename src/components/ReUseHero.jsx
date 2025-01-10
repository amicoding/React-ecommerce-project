import React from 'react'

const ReUseHero = (heroProps) => {
  return (
    
     <section>
      
      <div className="bg-[#F2F0FF] h-[286px] flex items-center">
        
      <div className="container mx-auto">
        <div className="">
          
          <h1 className="font-josef text-4xl font-bold">{heroProps.heading} </h1>
          <ul className="flex gap-2 ">
            <li>Home</li>
            <li>Pages</li>
            <li className="text-primary">Shopping Page</li>
          </ul>
          
        </div>
      </div>
      </div>
      
    </section> 
    
  )
}

export default ReUseHero