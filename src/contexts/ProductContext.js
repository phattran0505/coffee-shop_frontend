import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/config";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [menus, setMenus] = useState([]);
  async function fetchData() {
    try {
      const res = await fetch(`${BASE_URL}/menu`);
      const result = await res.json();
      setMenus(result.data);
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={{ menus }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
