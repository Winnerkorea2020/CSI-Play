"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import TopCoinWeekendData from "./TopCoinWeekendData";
import TopCoinMonth from "./TopCoinMonthData";
import TopCoinSixMonth from "./TopCoinSixMonthData";
import TopCoinYear from "./TopCoinYearData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopCoins() {
  return (
    <div className="mt-2">
      <div className="bg-white px-4 py-3 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <Image src="/ico-upbit.svg" width={50} height={50} />
          <h2 className=" tracking-tighter font-medium text-sm mt-2">
            기간별 상승 코인
          </h2>
        </div>
        <div className="mt-5">
          <Tab.Group>
            <Tab.List className={`w-full grid grid-cols-4 gap-2 text-sm`}>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "py-1 rounded outline-0 bg-gray-500 text-white border-gray-500 text-center w-full hover:border-none"
                        : "py-1 rounded outline-0 bg-white text-black border border-gray-500 text-center w-full"
                    }
                  >
                    1주일
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "py-1 rounded outline-0 bg-gray-500 text-white border-gray-500 text-center w-full hover:border-none"
                        : "py-1 rounded outline-0 bg-white text-black border border-gray-500 text-center w-full"
                    }
                  >
                    1개월
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "py-1 rounded outline-0 bg-gray-500 text-white border-gray-500 text-center w-full hover:border-none"
                        : "py-1 rounded outline-0 bg-white text-black border border-gray-500 text-center w-full"
                    }
                  >
                    6개월
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "py-1 rounded outline-0 bg-gray-500 text-white border-gray-500 text-center w-full hover:border-none"
                        : "py-1 rounded outline-0 bg-white text-black border border-gray-500 text-center w-full"
                    }
                  >
                    1년
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <TopCoinWeekendData />
              </Tab.Panel>
              <Tab.Panel>
                <TopCoinMonth />
              </Tab.Panel>
              <Tab.Panel>
                <TopCoinSixMonth />
              </Tab.Panel>
              <Tab.Panel>
                <TopCoinYear />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
