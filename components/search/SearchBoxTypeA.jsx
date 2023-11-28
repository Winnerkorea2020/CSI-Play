import React from "react";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBoxTypeA = () => {
  return (
    <div className="w-full  xl:static xl:max-w-sm xl:px-0">
      <div className="relative xl:w-full mx-auto">
        <input
          className="search__bar--input"
          type="search"
          placeholder="Search"
        />
        <button className="search__bar--button">
          <LiaSearchSolid size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBoxTypeA;
