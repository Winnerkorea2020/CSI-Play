"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import FutureStockPNL from "./FutureStockPNL";
import FutureStockTagetPrice from "./FutureStockTagetPrice";
import FutureStockLiquidation from "./FutureStockLiquidation";
import FutureMaxOpen from "./FutureMaxOpen";
import FutureOpenPrice from "./FutureOpenPrice";

const FutureStock = () => {
  return (
    <Tab.Group>
      <Tab.List className={`grid grid-cols-5 gap-0.5 `}>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button className={selected ? "tab tab__black" : "tab__outline "}>
              PNL(수익)
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
              청산가격
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button className={selected ? "tab tab__black" : "tab__outline"}>
              Max Open
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button className={selected ? "tab tab__black" : "tab__outline"}>
              Open Price
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className={`mt-3`}>
        <Tab.Panel>
          <FutureStockPNL />
        </Tab.Panel>
        <Tab.Panel>
          <FutureStockTagetPrice />
        </Tab.Panel>
        <Tab.Panel>
          <FutureStockLiquidation />
        </Tab.Panel>
        <Tab.Panel>
          <FutureMaxOpen />
        </Tab.Panel>
        <Tab.Panel>
          <FutureOpenPrice />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FutureStock;
