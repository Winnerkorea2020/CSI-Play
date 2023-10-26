"use client";
import { LiaAngleRightSolid } from "react-icons/lia";
import Link from "next/link";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import BestCoint from "./BestCoint";
import BestExchange from "./BestExchange";
import BestFutures from "./BestFutures";

const BestCoinCurrency = () => {
  return (
    <div className="card h-full">
      <div className="main__box--title ">
        <h2 className="main__title">Best Coin 시세 정보</h2>

        <Link className="" href={`/`}>
          <LiaAngleRightSolid size={20} />
        </Link>
      </div>

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
