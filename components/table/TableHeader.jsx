import React from "react";
import SearchbarTypeA from "../searchbox/SearchbarTypeA";

const TableHeader = ({ title, nosearch }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2.5">
      <h3 className="table__title">{title}</h3>
      {nosearch ? <SearchbarTypeA /> : null}
    </div>
  );
};

export default TableHeader;
