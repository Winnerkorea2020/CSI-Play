import React from "react";

const KpremiumTableHeader = ({ columns }) => {
  return (
    <thead className="text-gray-700 uppercase bg-gray-200">
      <tr className="border-b">
        {columns.map(({ label, accessor }) => {
          return (
            <th
              key={accessor}
              scope="col"
              className="px-3 py-3 whitespace-nowrap"
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default KpremiumTableHeader;
