"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import BestCoint from "./BestCoint";
import BestExchange from "./BestExchange";
import BestFutures from "./BestFutures";
import MainTitle from "@/components/title/MainTitle";

const BestCoinCurrency = () => {
  const title = "Best Coin 시세 정보";
  const linkUrl = "/";
  return (
    <div className="card h-full">
      <MainTitle title={title} url={linkUrl} />

      <div className="main__board--card">
        <div className="w-full truncate">
          <Tab.Group>
            <Tab.List className="grid grid-cols-3 gap-1">
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={selected ? "tab tab__black " : "tab tab__white"}
                  >
                    코인
                  </button>
                )}
              </Tab>

              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={selected ? "tab tab__black" : "tab tab__white"}
                  >
                    거래소
                  </button>
                )}
              </Tab>

              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={selected ? "tab tab__black" : "tab tab__white"}
                  >
                    선물
                  </button>
                )}
              </Tab>
            </Tab.List>

            <Tab.Panels className={`mt-2`}>
              <Tab.Panel>
                <BestCoint />
              </Tab.Panel>
              <Tab.Panel>
                <BestExchange />
              </Tab.Panel>
              <Tab.Panel>
                <BestFutures />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default BestCoinCurrency;
