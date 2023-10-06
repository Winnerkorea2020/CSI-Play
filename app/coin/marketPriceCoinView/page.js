"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Table from "@/components/Table";
import CoinSearchBar from "@/components/CoinSearchBar";
import Pagination from "@/components/Pagination";

const MarketPriceCoinView = () => {
  return (
    <div className="border rounded-lg shadow-sm h-full bg-white p-4">
      <h6 className="py-4 font-semibold underline text-lg">Title</h6>
      <div className="overflow-hidden border border-gray-200  md:rounded-lg w-full p-4">
        <Tab.Group>
          <Tab.List className={`grid grid-cols-3 gap-2`}>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button className={selected ? "tab tab__black" : "tab__outline"}>코인</button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button className={selected ? "tab tab__black" : "tab__outline"}>거래소</button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button className={selected ? "tab tab__black" : "tab__outline"}>선물</button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className={`mt-3`}>
            <Tab.Panel>
              <div>
                {/* Search Bar */}
                <CoinSearchBar />
                <div className="mt-3">
                  <div>
                    <table className="w-full text-sm  text-gray-500  table-fixed">
                      <thead className="text-base text-gray-700 bg-gray-100">
                        <tr>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-start">
                            코인명
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            거래금액
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            시세(KRW)
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            24시간 변동율
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="flex justify-start items-center gap-2 w-full">
                              <div className="flex justify-center items-start gap-3 ">
                                <Image src={`/ico-bitcoin.svg`} width={20} height={20} />
                              </div>
                              <div className="text-base tracking-tighter">
                                <div>
                                  <span className="text-gray-800">Bitcoin</span>
                                  <span className="ml-2">BTC</span>/<span>KRW</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">8조 3,686억</div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">38,452,000</div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="flex justify-center w-full text-base tracking-tighter">
                              <div className="text-base px-2 text-blue-900 rounded bg-blue-400 text-center w-24 ">
                                -0.0 <span>%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination */}
                <Pagination />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* Search */}
                <CoinSearchBar />
                {/* table */}
                <div className="mt-3">
                  <div>
                    <table className="w-full text-sm  text-gray-500  table-fixed">
                      <thead className="text-base text-gray-700 bg-gray-100">
                        <tr>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-start">
                            거래소
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            24H 거래량
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            코인
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            페어
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="flex justify-start items-center gap-2 w-full">
                              <div className="flex justify-center items-start gap-3 ">
                                <Image src={`/ico-bitcoin.svg`} width={20} height={20} />
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">8조 3,686억</div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">38,452,000</div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="flex justify-center w-full text-base tracking-tighter">
                              <div className="text-base px-2 text-blue-900 rounded bg-blue-400 text-center w-24 ">
                                -0.0 <span>%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination */}
                <Pagination />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* table */}
                <div className="mt-3">
                  <div>
                    <table className="w-full text-sm  text-gray-500  table-fixed">
                      <thead className="text-base text-gray-700 bg-gray-100">
                        <tr>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-start">
                            거래소
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            심볼
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            현재가격
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            미체결액
                          </th>
                          <th scope="col" className="px-4 py-3 truncate whitespace-nowrap text-center">
                            24H 거래량
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="flex justify-start items-center gap-2 w-full">
                              <div className="flex justify-center items-start gap-1 ">
                                <Image src={`/ico-bitcoin.svg`} width={20} height={20} />
                                <span className="">Binance</span>
                                <span className="">(Futures)</span>
                              </div>
                            </div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">BTCUSDT</div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="flex justify-start items-center gap-2 w-full">
                              <div className="text-center text-base tracking-tighter">38,452,000</div>
                              <div>
                                {/* ICONS BOX */}
                                <span className="text-base text-blue-700 font-semibold">-2.04%</span>
                              </div>
                            </div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">2,938.8 백만</div>
                          </td>
                          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
                            <div className="text-center text-base tracking-tighter">9,425.5 백만</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination */}
                <Pagination />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default MarketPriceCoinView;
