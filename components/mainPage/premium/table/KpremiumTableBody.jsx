import React from "react";

const KpremiumTableBody = ({ columns, tableData }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id} className="">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              <div className="flex justify-start items-center gap-1 tracking-tighter">
                <img src={`./${data.icon}`} alt="" width="20" />
                <span className="w-11 text-center px-1 py-0.5 bg-orange-300 text-white rounded-sm">
                  {data.coin}
                </span>
                <span className="text-gray-600">{data.full_name}</span>
              </div>
            </th>
            <td className="px-6 py-4 whitespace-nowrap">{data.price_usd}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.price_krw}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.k_price}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="text-blue-500">{data.change_rate_day}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {data.total_value} <span>억</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {data.use_one_day_trading} <span>억</span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default KpremiumTableBody;
