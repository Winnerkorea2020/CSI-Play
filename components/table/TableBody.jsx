import React from "react";

const TableBody = ({ columns, tableData }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id} className="text-center">
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return (
                <td key={accessor} className="py-2.5 px-2">
                  {tData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
