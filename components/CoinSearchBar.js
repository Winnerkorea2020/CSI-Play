import React from "react";

const CoinSearchBar = () => {
  return (
    <div>
      <form className="w-full">
        <div className="flex flex-col sm:flex-row justify-end items-center gap-3">
          <select className="py-2.5 px-3 bg-white border shadow-sm rounded-lg w-full sm:w-52">
            <option className="py-2.5 px-3">전체</option>
          </select>
          <select className="py-2.5 px-3 bg-white border shadow-sm rounded-lg w-full sm:w-52">
            <option className="py-2.5 px-3">KRW</option>
          </select>
          <div className="flex flex-col sm:flex-row justify-end items-center gap-3 w-full">
            <input className="py-2.5 px-3 bg-white border shadow-sm rounded-lg w-full sm:w-60"></input>
            <button className="py-2.5 px-3 w-full sm:w-24 bg-blue-500 text-blue-50 rounded-lg shadow-sm  border">
              검색
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CoinSearchBar;
