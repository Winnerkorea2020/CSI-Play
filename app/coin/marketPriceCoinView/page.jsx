"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import CoinSearchBar from "@/components/CoinSearchBar";
import Pagination from "@/components/Pagination";
import TableSoritng from "@/components/table/TableSoritng";

const MarketPriceCoinView = () => {
  return (
    <div className="border rounded-lg shadow-sm h-full bg-white p-4">
      <div>
        <h6 className="py-4 font-semibold underline text-lg">시세/김프</h6>
        <div className="h-96 p-4 border rounded-lg  mb-5">
          <div className="relative bg-red-400 h-full">
            <img
              src="/kimchart.png"
              alt=""
              className="absolute top-0 left-0 h-full w-full"
            />
          </div>
        </div>
      </div>
      <div>
        <h6 className="py-4 font-semibold underline text-lg">코인정보</h6>
        <div>
          <TableSoritng />
        </div>
      </div>
      <div className="overflow-hidden border border-gray-200  md:rounded-lg w-full p-4">
        <Tab.Group>
          <Tab.List className={`grid grid-cols-3 gap-2`}>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={selected ? "tab tab__black" : "tab__outline"}
                >
                  코인
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={selected ? "tab tab__black" : "tab__outline"}
                >
                  거래소
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={selected ? "tab tab__black" : "tab__outline"}
                >
                  선물
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className={`mt-3`}>
            <Tab.Panel>
              <div>
                {/* Search Bar */}
                <CoinSearchBar />
                <div className="mt-3">
                  <TableSoritng />
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
                  <TableSoritng />
                </div>
                {/* Pagination */}
                <Pagination />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* table */}
                <div className="mt-3">
                  <TableSoritng />
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
