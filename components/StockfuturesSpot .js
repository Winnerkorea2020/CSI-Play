"use client";

import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import FutureStock from "./FutureStock";
import SpotStock from "./SpotStock";

const StockfuturesSpot = () => {
  return (
    <div className=" bg-white p-2 xl:p-4 w-full">
      <div className="">
        <Tab.Group>
          <Tab.List className="grid grid-cols-2 gap-2">
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-sm py-2 rounded outline-0	bg-gray-800 text-white border-gray-800 text-center w-full "
                      : "text-sm py-2 rounded outline-0	bg-white text-black border border-gray-800 text-center w-full"
                  }
                >
                  선물 계산기
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-sm py-1 xl:py-2 rounded outline-0	bg-gray-800 text-white border-gray-800 text-center w-full "
                      : "text-sm py-1 xl:py-2 rounded outline-0	bg-white text-black border border-gray-800 text-center w-full"
                  }
                >
                  현물계산기
                </button>
              )}
            </Tab>
          </Tab.List>
          <div className="my-6 divide-y py-3">
            <Tab.Panels>
              <Tab.Panel>
                <FutureStock />
              </Tab.Panel>
              <Tab.Panel>
                <SpotStock />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default StockfuturesSpot;
