"use client";

import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import SpotStock from "./SpotStock";
import FutureStock from "../future/FutureStock";

const StockfuturesSpot = () => {
  return (
    <div className="card card-shadow text-xs xl:text-sm relative">
      <div className="h-[657px] xl:h-[680px] 2xl:h-[520px] relative">
        <Tab.Group>
          <Tab.List className="grid grid-cols-2 gap-1">
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={selected ? "tab tab__black " : "tab tab__white"}
                >
                  선물 계산기
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={selected ? "tab tab__black" : "tab tab__white"}
                >
                  현물계산기
                </button>
              )}
            </Tab>
          </Tab.List>

          <Tab.Panels className={`mt-2`}>
            <Tab.Panel>
              <FutureStock />
            </Tab.Panel>
            <Tab.Panel>
              <SpotStock />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default StockfuturesSpot;
