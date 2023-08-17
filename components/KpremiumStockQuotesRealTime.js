import React from "react";

const KpremiumStockQuotesRealTime = () => {
  return (
    <div className="px-2 py-6 xl:px-4 bg-white rounded-lg">
      <h2 className="mb-6 font-semibold text-xl">
        김치프리미엄 실시간 시세조회
      </h2>

      <div className="mt-3">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 items-center xl:gap-10">
          <div className="inline-flex items-center gap-3">
            <img src="./ico-bitcoin.svg" alt="" width="30px" height="30px" />
            <select id="select0" className="border px-2 py-1.5 rounded-lg">
              <option value="">비트코인(BTC)</option>
            </select>
          </div>
          <div className="">
            <dl className="flex justify-start xl:justify-end items-center gap-3">
              <dt className="font-medium text-sm tracking-tighter">등락</dt>
              <dd className="ml-4 font-semibold">
                <span className="text-red-500">-2.33%</span>
              </dd>
              <dt className="font-medium text-sm tracking-tighter">거래대금</dt>
              <dd className="ml-4 font-semibold">
                <span className="text-blue-500">2,333억</span>
              </dd>
            </dl>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-11 items-center mt-5 tracking-tighter">
          <div className="w-full xl:col-span-3 rounded-lg border border-gray-300 shadow shadow-gray-200 px-3 py-2.5">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <img
                    src="./ico-upbit.svg"
                    alt=""
                    width="25px"
                    height="25px"
                  />
                  <span className="font-medium text-base">업비트</span>
                </div>
                <span className="block text-sm font-medium">22,389,123 원</span>
              </div>
              <div className="w-full text-end">
                <p className="">17,516,08 $</p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 1 w-full text-center">
            <span className="text-3xl text-center">-</span>
          </div>

          <div className="w-full xl:col-span-3 rounded-lg border border-gray-300 shadow shadow-gray-200 px-3 py-2.5">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <img src="./ico-binance.svg" alt="" />
                  <span className="font-medium text-base">바이낸스</span>
                </div>
                <span className="block text-sm font-medium">22,389,123 원</span>
              </div>
            </div>
            <div className="w-full text-end">
              <p className="">17,516,08 $</p>
            </div>
          </div>

          <div className="xl:col-span-1 1 w-full text-center">
            <span className="text-3xl text-center">=</span>
          </div>

          <div className="w-full xl:col-span-3 rounded-lg border border-red-300 shadow shadow-gray-200 px-3 py-2.5">
            <div className="flex justify-end items-center">
              <div className="flex justify-between items-center gap-3">
                <div className="font-bold text-red-500">김치프리미엄</div>
                <div className="text-blue-500 font-semibold">+2.18 %</div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-end font-bold text-xl">+ 476,785</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto  bg-gray-100 mt-8">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-gray-700 uppercase bg-gray-200">
            <tr className="border-b">
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                코인
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                가격(USD)
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                가격(KRW)
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                김프(한국)프리미엄
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                변환%(24h)
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                시가총액
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                USD표시 24시간 거래량
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex justify-start items-center gap-1 tracking-tighter">
                  <img src="./ico-bitcoin.svg" alt="" width="20" />
                  <span className="w-11 text-center px-1 py-0.5 bg-orange-300 text-white rounded-sm">
                    BTC
                  </span>
                  <span className="text-gray-600">BitCoin</span>
                </div>
              </th>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-blue-500">-0.003%</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                99,999,999 <span>억</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                99,999,999 <span>억</span>
              </td>
            </tr>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex justify-start items-center gap-1 tracking-tighter">
                  <img src="./ico-xrp.svg" alt="" width="20" />
                  <span className="w-11 text-center px-1 py-0.5 bg-orange-300 text-white rounded-sm">
                    XRP
                  </span>
                  <span className="text-gray-600">XRP</span>
                </div>
              </th>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-red-500">+3.114%</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                99,999,999 <span>억</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                99,999,999 <span>억</span>
              </td>
            </tr>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex justify-start items-center gap-1 tracking-tighter">
                  <img src="./ico-d.svg" alt="" width="20" />
                  <span className="w-11 text-center px-1 py-0.5 bg-orange-300 text-white rounded-sm">
                    DOGE
                  </span>
                  <span className="text-gray-600">Dogecoin</span>
                </div>
              </th>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4">
                <span className="text-blue-500">-0.003%</span>
              </td>
              <td className="px-6 py-4">
                99,999,999 <span>억</span>
              </td>
              <td className="px-6 py-4">
                99,999,999 <span>억</span>
              </td>
            </tr>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex justify-start items-center gap-1 tracking-tighter">
                  <img src="./ico-prx.svg" alt="" width="20" />
                  <span className="w-11 text-center px-1 py-0.5 bg-orange-300 text-white rounded-sm">
                    XLM
                  </span>
                  <span className="text-gray-600">Stellar</span>
                </div>
              </th>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4">
                <span className="text-blue-500">-0.003%</span>
              </td>
              <td className="px-6 py-4">
                99,999,999 <span>억</span>
              </td>
              <td className="px-6 py-4">
                99,999,999 <span>억</span>
              </td>
            </tr>
            <tr className="">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex justify-start items-center gap-1 tracking-tighter">
                  <img src="./ico-ether.svg" alt="" width="20" />
                  <span className="w-11 text-center px-1 py-0.5 bg-orange-300 text-white rounded-sm">
                    ETH
                  </span>
                  <span className="text-gray-600">Ethereum</span>
                </div>
              </th>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4 whitespace-nowrap">99,999,999</td>
              <td className="px-6 py-4">
                <span className="text-blue-500">-0.003%</span>
              </td>
              <td className="px-6 py-4">
                99,999,999 <span>억</span>
              </td>
              <td className="px-6 py-4">
                99,999,999 <span>억</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KpremiumStockQuotesRealTime;
