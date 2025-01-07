

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// Create Context
const apiData = createContext();

const ContextApi = ({ children }) => {
  const [apiInfo, setApiInfo] = useState([]);
 

  // Fetch data with axios
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=0')
      .then((res) => setApiInfo(res.data.products))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <>
       <apiData.Provider value={apiInfo}>
      {children}
    </apiData.Provider>
    </>
   
  )
}

// Export the context and provider component

export { apiData, ContextApi };