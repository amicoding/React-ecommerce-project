import React, { useContext, useState } from 'react';
import { apiData } from "../components/ContextApi.jsx";
import { Link } from "react-router-dom";
import Logo from "../assets/Hekto.png"; // Ensure this is the correct path to the image
import { FaAngleDown, FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const data = useContext(apiData);

  const [menuShow, setMenuShow] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for the search query

  const handleNavMenu = () => {
    setMenuShow(!menuShow);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query

    if (query === "") {
      setSearchResult([]); // Clear search results if input is empty
    } else {
      const filteredProduct = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResult(filteredProduct); // Update search results based on query
    }
  };

  return (
    <nav className="py-5 z-50">
      <div className="container mx-auto">
        <div className="flex items-center gap-5 justify-between">
          <Link to="/">
            <img src={Logo || "default-logo.png"} alt="Hekto Logo" />
          </Link>
          <div>
            <ul
              className={`lg:static lg:flex lg:gap-12 duration-700 ${
                menuShow
                  ? "absolute top-14 left-0 pl-10 pt-10 pb-10 pr-4 rounded z-50 h-full bg-[#DFE6F8]"
                  : "absolute top-14 z-40 -left-72"
              }`}
            >
              <li className="flex items-center gap-2 relative group">
                <Link to="/">Home</Link>
                <FaAngleDown />
                <ul className="absolute top-6 left-0 hidden group-hover:block bg-primary text-white p-3 font-bold rounded z-40">
                  <li>Pages</li>
                  <li>
                    <Link to="/product">Products</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li>Pages</li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <div className="relative flex items-center">
                <input
                  value={searchQuery} // Bind input value to searchQuery state
                  onChange={handleSearch}
                  className="border-2 outline-none w-50 h-8 pl-2 rounded"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="h-8 w-8 bg-[#FB2E86] flex justify-center items-center text-2xl font-bold"
                  type="submit"
                >
                  <CiSearch className="text-white" />
                </button>

                {/* Search Results Dropdown */}
                {searchResult.length > 0 && searchQuery !== "" && (
                  <ul className="absolute top-10 left-0 bg-white border border-gray-200 rounded shadow-lg w-full max-h-48 overflow-y-auto z-50">
                    {searchResult.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Link to={`/product/${item.id}`} className="flex items-center gap-3">
                          {/* Image on the left side of the title */}
                          <img
                            src={item.thumbnail || "default-image.png"} // Replace with actual image URL
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>
          </div>

          <div onClick={handleNavMenu} className="lg:hidden cursor-pointer">
            {menuShow ? <ImCross /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;