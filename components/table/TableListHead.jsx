import React from "react";

const TableListHead = ({ columns }) => {
  return (
    <thead>
      <tr className="w-full">
        {columns.map(({ label, accessor }) => {
          return (
            <th scope="col" key={accessor} className="px-6 py-3 ">
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableListHead;
