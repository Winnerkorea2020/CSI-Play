import React from "react";
import { LiaSearchSolid } from "react-icons/lia";

const SearchbarTypeA = () => {
  return (
    <div className="search__bar ">
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

export default SearchbarTypeA;
