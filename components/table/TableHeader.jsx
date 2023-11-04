import React from "react";
import SearchBar from "../searchbox/SearchBar";

const TableHeader = ({ title, nosearch }) => {
  return (
    <div className="flex justify-between items-center py-2.5">
      <h3 className="table__title">{title}</h3>
      {nosearch ? <SearchBar /> : null}
    </div>
  );
};

export default TableHeader;
