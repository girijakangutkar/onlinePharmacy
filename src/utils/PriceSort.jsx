import React, { useContext } from "react";
import { FetchIt } from "../context/FetchContext";

const PriceSort = () => {
  const { priceSort, setPriceSort } = useContext(FetchIt);

  return (
    <div>
      <select
        value={priceSort}
        onChange={(e) => setPriceSort(e.target.value)}
        className="border border-[#ccc] w-[100px] sm:w-[220px] md:w-[200px] xl:w-[200px] 2xl:w-[230px] m-5 ml-0 p-1 rounded-md shadow-sm text-sm"
      >
        <option value="All">All</option>
        <option value="HtL">High to Low</option>
        <option value="LtH"> Low to High</option>
      </select>
    </div>
  );
};

export default PriceSort;
