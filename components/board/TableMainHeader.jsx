import React from "react";

const TableMainHeader = () => {
  return (
    <thead className="text-base text-gray-700 bg-gray-100">
      <tr>
        <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-left">
          번호
        </th>
        <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-left">
          제목
        </th>
        <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
          작성자
        </th>
        <th scope="col" className="hidden xl:block px-4 py-3 truncate whitespace-nowrap text-center">
          등록일
        </th>
      </tr>
    </thead>
  );
};

export default TableMainHeader;
