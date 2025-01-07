import React, { useContext, useState, useEffect } from 'react'; // React core functionalities
import FooterBannar from '../components/FooterBannar.jsx'; // Footer banner component
import { apiData } from "../components/ContextApi.jsx"; // Context API for product data
import ShopGrid from '../components/ShopGrid.jsx'; // ShopGrid component
import { IoGrid } from "react-icons/io5"; // React icons (IoGrid)
import { FaList } from "react-icons/fa"; // React icons (FaList)
import { IoCartOutline } from "react-icons/io5"; // React icons (IoCartOutline)
import { CiHeart } from "react-icons/ci"; // React icons (CiHeart)
import { FaSearchPlus } from "react-icons/fa"; // React icons (FaSearchPlus)
import { FaAngleDown } from "react-icons/fa"; // React icons (FaAngleDown)



const Shop = () => {
  const data = useContext(apiData);

  const [category, setCategory] = useState([]);
  const [categoryItems, setCategoryItem] = useState([]);
  const [categoriShow, setCategoriShow] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30); // Display 30 items per page

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  const handleCategory = (categorys) => {
    let filterProducts = data.filter((item) => item.category === categorys);
    setCategoryItem(filterProducts);
    setCurrentPage(1); // Reset to the first page when a category is selected
  };

  // Paginated data
  const displayedData = categoryItems.length > 0 ? categoryItems : data;
  const totalPages = Math.ceil(displayedData.length / itemsPerPage);

  const paginatedItems = displayedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section>
      <ShopGrid />
      <div className="pt-4">
        <div className="container mx-auto">
          <div className="flex justify-between justify-center items-center gap-2 font-josef">
            <div className="font-josef font-bold">
              <h2 className="text-2xl">Ecommerce Accessories & Fashion Item</h2>
              <h6>About {displayedData.length} results</h6>
            </div>
            <div className="flex">
              <h2>Per Page:</h2>
              <input className="outline-none border-2 w-14" type="text" name="" id="" value={itemsPerPage} readOnly />
              <div className="flex justify-center items-center gap-2">
            <h2>Sort By:</h2>
            <select className='text-[#3F509E] text-[16px] font-lato font-normal border-2 py-1 outline-none ps-2' name="" id="">
              <option>Best Match</option>
              <option>Most Popular</option>
              <option>Featured</option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h2>View:</h2>
            <IoGrid />
            <FaList />
          </div>
          <div className="justify-center items-center flex">
            <input className="outline-none border-2 w-32" type="text" name="" id=""  />
          </div>
            </div>
          </div>

          <div className="flex pt-4 gap-10">
            <div className="w-[20%]">
              <h1
                onClick={() => setCategoriShow(!categoriShow)}
                className="flex items-center gap-4 font-bold text-2xl font-josef"
              >
                Shop By Category
                <FaAngleDown />
              </h1>
              {categoriShow && (
                <ul className="h-40 overflow-y-scroll p-3">
                  {category.map((item) => (
                    <li
                      onClick={() => handleCategory(item)}
                      className="capitalize cursor-pointer py-3 border-b-2"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-wrap justify-between w-[80%]">
              {paginatedItems.map((items) => (
                <div
                  key={items.id}
                  className="shadow-lg !w-[95%] mb-5 relative hover:bg-[#2F1AC4] duration-700 group max-w-[270px] max-h-[361px]"
                >
                  <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                    <img className="max-w-[150px]" src={items.thumbnail} alt={items.title} />
                    <button
                      className="absolute top-[58%] py-1 px-2 font-josef bg-[#08D15F] text-white hidden group-hover:block duration-1000"
                      type="submit"
                    >
                      View Details
                    </button>
                  </div>
                  <div className="text-center py-2">
                    <h2 className="font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white">
                      {items.title}
                    </h2>
                    <p className="font-josef font-normal text-[14px] text-[#151875] group-hover:text-white">
                      ${items.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 py-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-lg rounded-md ${
                currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                className={`px-4 py-2 text-lg rounded-md ${
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
              className={`px-4 py-2 text-lg rounded-md ${
                currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
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