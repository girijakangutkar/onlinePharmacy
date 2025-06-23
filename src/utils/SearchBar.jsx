import React, { useContext, useState } from "react";
import { FetchIt } from "../context/FetchContext";
import Search from "antd/es/transfer/search";

const SearchBar = () => {
  const { search, setSearch } = useContext(FetchIt);

  return (
    <div className="m-5 ml-0 w-[90%] sm:w-[70%] md:w-[90%] xl:w-[80%] 2xl:w-[85%]">
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Medicines"
      />
    </div>
  );
};

export default SearchBar;
