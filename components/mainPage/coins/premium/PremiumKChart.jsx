"use client";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import TableHeader from "@/components/table/TableHeader";
import CoinSearchBar from "@/components/coins/search/CoinSearchBar";
import TableSoritng from "@/components/table/TableSoritng";
import TableTypeA from "@/components/table/TableTypeA";
import TableTypeB from "@/components/table/TableTypeB";
import TableTypeC from "@/components/table/TableTypeC";
import Image from "next/image";

const PremiumKChart = () => {
  const title = "코인시세/김프카테고리";

  return (
    <div>
      <TableHeader title={title} nosearch={false} />

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
                  <TableTypeA />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* Search */}
                <CoinSearchBar />
                {/* table */}
                <div className="mt-3">
                  <TableTypeB />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                {/* table */}
                <div>
                  <div className="inline-flex items-center gap-2">
                    <div>
                      <Image src="/" width={20} height={20}></Image>
                    </div>
                    <h3 className="text-xl">비트코인 선물(무기한)</h3>
                  </div>
                  <div className="text-right">
                    <p>
                      <strong className="pr-2">총 미체결약정</strong>
                      165.60억Binance (Futures) 18%, XT.COM (Derivatives) 9%
                    </p>
                    <p>
                      <strong className="pr-2">총 24h거래량</strong>
                      800.90억Binance (Futures) 17%, Bitget Futures 13%
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <TableTypeC />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default PremiumKChart;
