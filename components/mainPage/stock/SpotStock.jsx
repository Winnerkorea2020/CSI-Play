"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import SpotStockPrice from "./SpotStockPrice";
import SpotStockTargetPrice from "./SpotStockTargetPrice";
import SpotStockRate from "./SpotStockRate";

const SpotStock = () => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className={`grid grid-cols-5 gap-0.5`}>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button className={selected ? "tab tab__black" : "tab__outline"}>
                평단가
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button className={selected ? "tab tab__black" : "tab__outline"}>
                목표가격
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button className={selected ? "tab tab__black" : "tab__outline"}>
                수익률
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <SpotStockPrice />
          </Tab.Panel>
          <Tab.Panel>
            <SpotStockTargetPrice />
          </Tab.Panel>
          <Tab.Panel>
            <SpotStockRate />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SpotStock;
