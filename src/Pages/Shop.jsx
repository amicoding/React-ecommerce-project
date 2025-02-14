import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FooterBannar from '../components/FooterBannar.jsx';
import { addToCart } from '../components/slices/CartSlice.js';
import { apiData } from "../components/ContextApi.jsx";
import ReUseHero from '../components/ReUseHero.jsx';
import { IoGrid, IoCartOutline } from "react-icons/io5";
import { FaList, FaSearchPlus, FaAngleDown } from "react-icons/fa";
import { CiHeart } from 'react-icons/ci';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Shop = () => {
  const data = useContext(apiData);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ low: 0, high: Infinity });
  const [categoriShow, setCategoriShow] = useState(false);
  const [priceShow, setPriceShow] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceProducts = (low, high) => {
    setPriceRange({ low, high });
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange({ low: 0, high: Infinity });
    setCurrentPage(1);
  };

  const filteredData = data.filter(
    (item) =>
      (selectedCategory ? item.category === selectedCategory : true) &&
      item.price > priceRange.low &&
      item.price <= priceRange.high
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setItemsPerPage(value);
      setCurrentPage(1);
    }
  };

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success('Added To Cart Successfully', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section>
      <ReUseHero heading="Shopping Page" />
      <div className="container mx-auto px-4 pt-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 font-josef">
          <div className="font-bold text-center sm:text-left">
            <h2 className="text-2xl">Ecommerce Accessories & Fashion Item</h2>
            <h6>About {filteredData.length} results</h6>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <h2>Per Page:</h2>
            <input
              className="outline-none border-2 w-14 text-center"
              type="number"
              min="1"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            />
          </div>
        </div>

        {/* Filters & Products Section */}
        <div className="flex flex-col md:flex-row gap-6 pt-4">
          {/* Filters */}
          <div className="w-full md:w-1/4">
            {/* Filter by Category */}
            <div className="pb-6">
              <h1
                onClick={() => setCategoriShow(!categoriShow)}
                className="flex items-center justify-between font-bold text-xl cursor-pointer border-b pb-2"
              >
                Shop By Category <FaAngleDown />
              </h1>
              {categoriShow && (
                <ul className="mt-2">
                  {category.map((item) => (
                    <li
                      onClick={() => handleCategory(item)}
                      className={`cursor-pointer py-2 border-b ${
                        selectedCategory === item ? 'text-blue-500 font-bold' : ''
                      }`}
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Filter by Price */}
            <div>
              <h1
                onClick={() => setPriceShow(!priceShow)}
                className="flex items-center justify-between font-bold text-xl cursor-pointer border-b pb-2"
              >
                Shop By Price <FaAngleDown />
              </h1>
              {priceShow && (
                <ul className="mt-2">
                  <li onClick={() => handlePriceProducts(0, 50)}>$0.00 - $50.00</li>
                  <li onClick={() => handlePriceProducts(50.01, 100)}>$50.01 - $100.00</li>
                  <li onClick={() => handlePriceProducts(100.01, 200)}>$100.01 - $200.00</li>
                </ul>
              )}
            </div>

            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full"
            >
              Clear Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 shadow-md">
                  <Link to={`/shop/${item.title.replaceAll(' ', '-')}`} className="block text-center">
                    <img src={item.thumbnail} alt={item.title} className="mx-auto max-w-[150px]" />
                    <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                    <p className="text-sm text-gray-700">${item.price}</p>
                  </Link>
                  <button onClick={() => handleAddToCart(item)} className="mt-2 bg-green-500 text-white py-1 px-3 rounded">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        {/* Pagination Section */}
<div className="flex justify-center items-center flex-wrap gap-2 py-6">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 border rounded-md transition ${
      currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-4 py-2 border rounded-md transition ${
        currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 border rounded-md transition ${
      currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Next
  </button>
</div>

        <ToastContainer />
      </div>
      <FooterBannar />
    </section>
  );
};

export default Shop;