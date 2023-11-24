import React from "react";
import SearchBar from "../Searchbox/SearchBar";

const TableHeader = ({ title, nosearch }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2.5">
      <h3 className="table__title">{title}</h3>
      {nosearch ? <SearchBar /> : null}
    </div>
  );
};

export default TableHeader;
