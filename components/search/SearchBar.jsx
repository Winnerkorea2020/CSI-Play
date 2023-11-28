import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="w-full">
        <div className="flex justify-between xl:justify-end items-center gap-3">
          <div className="flex w-full xl:w-auto justify-between xl:justify-end items-center gap-3">
            <input className=" py-2.5 px-3 bg-white border shadow-sm rounded-lg w-full xl:w-60"></input>
            <button className="py-2.5 px-3 w-24 bg-blue-500 hover:bg-blue-700 text-blue-50 rounded-lg shadow-sm  border">
              검색
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
