"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import CoinChartView from "@/components/coins/chart/CoinChartView";
import CoinSearchBar from "@/components/coins/search/CoinSearchBar";
import TableSoritng from "@/components/table/TableSoritng";

const MarketPriceCoinView = () => {
  return (
    <div className="border rounded-lg shadow-sm h-full bg-white p-4">
      <div>
        <CoinChartView />
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
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* table */}
                <div className="mt-3">
                  <TableSoritng />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default MarketPriceCoinView;
