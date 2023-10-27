import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr className="text-lg py-2.5 bg-gray-100">
        {columns.map(({ label, accessor }) => {
          return (
            <th
              key={accessor}
              className="text-sm tracking-tighter truncate whitespace-nowrap py-2.5"
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
