import React from 'react'

import Hero from '../components/Hero.jsx'
import Featured from '../components/Featured.jsx'
import LeatestProduct from '../components/LeatestProduct.jsx'
import Shopex from '../components/Shopex.jsx'
import Advertise from '../components/Advertise.jsx'
import TrendingProduct from '../components/TrendingProduct.jsx'
import DiscountItem from '../components/DiscountItem.jsx'
import TopCategory from '../components/TopCategory.jsx'
import NewsLater from '../components/NewsLater.jsx'
import FooterBannar from '../components/FooterBannar.jsx'
import LeatestBlog from '../components/LeatestBlog.jsx'

const Home = () => {
  return (
    <div>
   
        <Hero/>
      <Featured/>
      <LeatestProduct/>
      <Shopex/>
      <Advertise/>
      <TrendingProduct/>
      <DiscountItem/>
      <TopCategory/>
      <NewsLater/>
      <FooterBannar/>
      <LeatestBlog/>
      
    </div>
  )
}

export default Home