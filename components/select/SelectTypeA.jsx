import React from "react";

const SelectTypeA = ({ selectData }) => {
  return (
    <select
      defaultValue="1"
      id="currencylist_1"
      className="w-32 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5"
    >
      {selectData.map((option, index) => {
        return (
          <option key={index} className="text-center" value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectTypeA;
