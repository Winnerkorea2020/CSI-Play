import React from "react";
import SearchBoxTypeA from "../search/SearchBoxTypeA";

const TableHeader = ({ title, nosearch }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2.5">
      <h3 className="table__title">{title}</h3>
      {nosearch ? <SearchBoxTypeA /> : null}
    </div>
  );
};

export default TableHeader;
