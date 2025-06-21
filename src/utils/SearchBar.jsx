import React, { useContext, useState } from "react";
import { FetchIt } from "../context/FetchContext";
import Search from "antd/es/transfer/search";

const SearchBar = () => {
  const { search, setSearch } = useContext(FetchIt);

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[80%] xl:w-[80%] 2xl:w-[80%] m-5 ml-0">
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Medicines"
      />
    </div>
  );
};

export default SearchBar;
