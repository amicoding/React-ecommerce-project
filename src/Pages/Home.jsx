import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Featured from '../components/Featured.jsx';
import LeatestProduct from '../components/LeatestProduct.jsx';
import Shopex from '../components/Shopex.jsx';
import Advertise from '../components/Advertise.jsx';
import TrendingProduct from '../components/TrendingProduct.jsx';
import DiscountItem from '../components/DiscountItem.jsx';
import TopCategory from '../components/TopCategory.jsx';
import NewsLater from '../components/NewsLater.jsx';
import FooterBannar from '../components/FooterBannar.jsx';
import LeatestBlog from '../components/LeatestBlog.jsx';

const Home = () => {
  const navigate = useNavigate();

  // Prevent JSON parse error by checking if token exists
  const token = localStorage.getItem('token');
  const parsedToken = token ? JSON.parse(token) : null;

  // Redirect if no token
  useEffect(() => {
    if (!parsedToken) {
      navigate('/login');
    }
  }, [parsedToken, navigate]);

  if (!parsedToken) {
    return null; // Prevent rendering until redirection happens
  }

  return (
    <section>
      <Hero />
      <Featured />
      <LeatestProduct />
      <Shopex />
      <Advertise />
      <TrendingProduct />
      <DiscountItem />
      <TopCategory />
      <NewsLater />
      <FooterBannar />
      <LeatestBlog />
    </section>
  );
};

export default Home;