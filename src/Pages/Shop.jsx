import React, { useContext, useState, useEffect } from 'react';
import FooterBannar from '../components/FooterBannar.jsx';
import { apiData } from "../components/ContextApi.jsx";
import ReUseHero from '../components/ReUseHero.jsx';
import { IoGrid, IoCartOutline } from "react-icons/io5";
import { FaList, FaSearchPlus, FaAngleDown } from "react-icons/fa";

const Shop = () => {
  const data = useContext(apiData);

  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ low: 0, high: Infinity });
  const [categoriShow, setCategoriShow] = useState(false);
  const [priceShow, setPriceShow] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30); // Default per-page value

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category is selected
  };

  const handlePriceProducts = (low, high) => {
    setPriceRange({ low, high });
    setCurrentPage(1); // Reset to the first page when price range is selected
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange({ low: 0, high: Infinity });
    setCurrentPage(1); // Reset to the first page
  };

  // Combine filters: Filter by both price and category
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
      setCurrentPage(1); // Reset to the first page when per-page value changes
    }
  };

  return (
    <section>
      <ReUseHero heading='Shoping Page' />
      <div className="pt-4">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center gap-2 font-josef">
            <div className="font-bold">
              <h2 className="text-2xl">Ecommerce Accessories & Fashion Item</h2>
              <h6>About {filteredData.length} results</h6>
            </div>
            <div className="flex items-center gap-4">
              <h2>Per Page:</h2>
              <input
                className="outline-none border-2 w-14 text-center"
                type="number"
                min="1"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              />
              <h2>Sort By:</h2>
              <select className="text-[#3F509E] text-[16px] border-2 py-1 outline-none ps-2">
                <option>Best Match</option>
                <option>Most Popular</option>
                <option>Featured</option>
              </select>
              <h2>View:</h2>
              <IoGrid />
              <FaList />
            </div>
          </div>

          {/* Filters Section */}
          <div className="flex pt-4 gap-10">
            <div className="">
              {/* Filter by Category */}
              <div className="pb-10">
                <h1
                  onClick={() => setCategoriShow(!categoriShow)}
                  className="flex items-center gap-4 font-bold text-2xl font-josef cursor-pointer"
                >
                  Shop By Category
                  <FaAngleDown />
                </h1>
                {categoriShow && (
                  <ul className="h-40 overflow-y-scroll p-3">
                    {category.map((item) => (
                      <li
                        onClick={() => handleCategory(item)}
                        className={`capitalize cursor-pointer py-3 border-b-2 ${
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
                  className="flex items-center gap-4 font-bold text-2xl font-josef cursor-pointer"
                >
                  Shop By Price
                  <FaAngleDown />
                </h1>
                {priceShow && (
                  <ul className="h-40 overflow-y-scroll p-3">
                    <li onClick={() => handlePriceProducts(0, 50)}>$0.00 - $50.00</li>
                    <li onClick={() => handlePriceProducts(50.01, 100)}>$50.01 - $100.00</li>
                    <li onClick={() => handlePriceProducts(100.01, 200)}>$100.01 - $200.00</li>
                    <li onClick={() => handlePriceProducts(200.01, 300)}>$200.01 - $300.00</li>
                    <li onClick={() => handlePriceProducts(300.01, 400)}>$300.01 - $400.00</li>
                    <li onClick={() => handlePriceProducts(400.01, 1000)}>$400.01 - $1000.00</li>
                  </ul>
                )}
              </div>

              {/* Clear Filters Button */}
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Clear Filters
              </button>
            </div>

            {/* Products Grid */}
            <div className="flex flex-wrap justify-between w-[80%]">
              {paginatedItems.map((item) => (
                <div
                  key={item.id}
                  className="shadow-lg !w-[95%] mb-5 relative hover:bg-[#2F1AC4] duration-700 group max-w-[270px] max-h-[361px]"
                >
                  <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                    <img
                      className="max-w-[150px]"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </div>
                  <div className="text-center py-2">
                    <h2 className="font-bold text-[18px] text-[#FB2E86] group-hover:text-white">
                      {item.title}
                    </h2>
                    <p className="text-[14px] text-[#151875] group-hover:text-white">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 py-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === page + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <FooterBannar />
    </section>
  );
};

export default Shop;