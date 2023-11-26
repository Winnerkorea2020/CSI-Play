import React from "react";
import SearchBar from "../Searchbox/SearchBar";

const BoardTableHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="py-4 font-semibold text-lg">{title}</h3>
      <SearchBar />
    </div>
  );
};

export default BoardTableHeader;
