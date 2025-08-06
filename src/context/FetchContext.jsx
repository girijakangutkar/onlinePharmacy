import { setLogLevel } from "firebase/app";
import React, { createContext, useState } from "react";

export const FetchIt = createContext(null);

const FetchContext = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  // const fetchMedicines = async (url) => {
  //   setIsLoading(true);
  //   try {
  //     const res = await fetch(url);
  //     const info = await res.json();
  //     const pages = Math.ceil(info.data.total / 50);
  //     setTotalPages(pages);
  //     //   console.log(info?.data?.data);
  //     // console.log(info.data.total);
  //     setMedicines(info?.data?.data);
  //   } catch (error) {
  //     console.log("Something went wrong:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const fetchMedicines = async (url, currentPage = 1, perPage = 50) => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      const items = json.data.data;
      if (!Array.isArray(items)) {
        console.error("Expected an array but got:", items);
        return;
      }

      const startIndex = (currentPage - 1) * perPage;
      const paginatedData = items.slice(startIndex, startIndex + perPage);

      setMedicines(paginatedData);
      setTotalPages(Math.ceil(items.length / perPage));
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch medicines:", error);
      setIsLoading(false);
    }
  };

  function searchMed() {
    return medicines.filter((med) =>
      med.item_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  function PriceFilter() {
    const result = searchMed().slice();

    if (priceSort === "HtL") {
      return result.sort((a, b) => b.price - a.price);
    } else if (priceSort === "LtH") {
      return result.sort((a, b) => a.price - b.price);
    }
    return result;
  }

  return (
    <FetchIt.Provider
      value={{
        medicines,
        fetchMedicines,
        isLoading,
        searchMed,
        setSearch,
        search,
        PriceFilter,
        priceSort,
        setPriceSort,
        totalPages,
      }}
    >
      {children}
    </FetchIt.Provider>
  );
};

export default FetchContext;
