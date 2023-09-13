import React from "react";

const CoinSearchBar = () => {
  return (
    <div>
      <form className="w-full">
        <div className="flex justify-end items-center gap-3">
          <select className="py-2.5 px-3 bg-white border shadow-sm rounded-lg w-52">
            <option className="py-2.5 px-3">전체</option>
          </select>
          <select className="py-2.5 px-3 bg-white border shadow-sm rounded-lg w-52">
            <option className="py-2.5 px-3">KRW</option>
          </select>
          <div className="flex justify-end items-center gap-3">
            <input className="py-2.5 px-3 bg-white border shadow-sm rounded-lg w-60"></input>
            <button className="py-2.5 px-3 w-24 bg-blue-400 text-blue-900 rounded-lg shadow-sm  border">검색</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CoinSearchBar;
