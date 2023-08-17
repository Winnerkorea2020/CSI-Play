import React from "react";

const Liquidation = () => {
  return (
    <div className="bg-white rounded-lg px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 h-full">
      <div className="mb-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 items-center w-full">
          <div className=" col-span-1">
            <h4 className="text-xl py-2.5 font-bold text-black">거래소 청산</h4>
          </div>
          <div className=" col-span-2">
            <div className="flex justify-between xl:justify-end items-center gap-3">
              <label
                for="currencylist_2"
                className="block font-medium py-2.5 text-base text-end"
              >
                코인
              </label>
              <select
                id="currencylist_2"
                className="w-32 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5"
              >
                <option className="" selected>
                  All
                </option>
              </select>
              <label
                for="currencylist_1"
                className="block font-medium py-2.5 text-base text-end"
              >
                기간
              </label>
              <select
                id="currencylist_1"
                className="w-32 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5"
              >
                <option className="" selected>
                  Choose Times
                </option>
                <option className="" value="ThirtyMINUTE">
                  30 Minute
                </option>
                <option className="" value="HOUR">
                  1 Hour
                </option>
                <option className="" value="TwoHOUR">
                  2 Hours
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-center text-gray-500 tracking-tighter">
            <colgroup>
              <col width="10%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="10%" />
              <col width="20%" />
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-1 py-3">
                  거래소
                </th>
                <th scope="col" className="px-1 py-3">
                  청산($)
                </th>
                <th scope="col" className="px-1 py-3">
                  공매수($)
                </th>
                <th scope="col" className="px-1 py-3">
                  공매도($)
                </th>
                <th scope="col" className="px-1 py-3">
                  백분율
                </th>
                <th scope="col" className="px-1 py-3">
                  백분율(Long/Short)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <span className="bg-gray-400 text-white w-full h-full inline-block text-center rounded-sm">
                    합계
                  </span>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>OKX</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>Huobi</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>Bybit</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>CoinEx</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>Bitmex</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>Deribit</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src="./ico-binance-lg.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>Bitfinex</span>
                  </div>
                </th>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4 truncate break-all">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                </td>
                <td className="px-2 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="inline-flex items-center">
                      <input
                        id="trade-range"
                        type="range"
                        value="50"
                        className="w-24 h-3 bg-orange-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="w-10">
                      <span className="" id="trade-value">
                        100
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </td>
                <td className="px-1 py-4">
                  <span className="">999,999,999</span>
                  <span>M</span>
                  <span className="ml-3">Long</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Liquidation;
