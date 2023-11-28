import React from "react";

const SearchBoxTypeB = ({ title, valueData }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-lg tracking-tighter font-medium py-2.5 px-2">{title}</div>
      <select name="" id="" className="px-2 py-2.5 text-sm border rounded-lg bg-none w-32 text-center">
        {valueData.map((Data) => (
          <option key={Data.valueData} value={Data.id}>
            {Data.valueData}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBoxTypeB;
