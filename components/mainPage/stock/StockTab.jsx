"use client";
import TableHeader from "@/components/table/TableHeader";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

const StockTab = ({ title }) => {
  return (
    <div className="py-2.5">
      <TableHeader title={title} nosearch={true} />
      <Tab.Group>
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`border  w-28 py-1.5
                  ${
                    selected
                      ? "bg-blue-500 text-white w-28 "
                      : "bg-white text-black w-28"
                  }`}
              >
                실시간속보
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`border  w-28 py-1.5
              ${
                selected
                  ? "bg-blue-500 text-white w-28 "
                  : "bg-white text-black w-28"
              }`}
              >
                주요뉴스
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="">
              <div className="flex border w-full">
                <div className="block w-full px-2">
                  <h3 className="text-sm inline-block">헤럴드 경제</h3>
                  <div className="px-5 inline-block">2022.12.29 16:34</div>
                  <h3 className=" tracking-tighter font-medium py-1">
                    바이비트 CEO "암호화폐 전망 낙관···비관적 거시 환경 두렵지
                    않다“
                  </h3>

                  <p className="block  py-2 whitespace-break-spaces">
                    1. 바이비트 CEO "암호화폐 전망 낙관…비관적 거시 환경 두렵지
                    않다" 암호화폐 전문 미디어 핀볼드에 따르면 벤 저우(Ben Zhou)
                    바이비트 최고경영자(CEO)가 최근 싱가포르에서 개최된
                    '토큰2049' 컨퍼런스에 토론 패널로 참석해 "암호화폐에 낙관적
                    전망을 유지하고 있다"며 "최근 부정적인 거시 환경이 지속되고
                    있지만, 암호화…
                  </p>
                </div>

                <div className=" bg-red-500 p-2 flex items-center">
                  <div className=" w-[120px] h-[120px] bg-blue-200 "></div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="">
              <div className="flex border w-full">
                <div className="block w-full px-2">
                  <h3 className="text-sm inline-block">헤럴드 경제</h3>
                  <div className="px-5 inline-block">2022.12.29 16:34</div>
                  <h3 className=" tracking-tighter font-medium py-1">
                    바이비트 CEO "암호화폐 전망 낙관···비관적 거시 환경 두렵지
                    않다“
                  </h3>

                  <p className="block  py-2 whitespace-break-spaces">
                    1. 바이비트 CEO "암호화폐 전망 낙관…비관적 거시 환경 두렵지
                    않다" 암호화폐 전문 미디어 핀볼드에 따르면 벤 저우(Ben Zhou)
                    바이비트 최고경영자(CEO)가 최근 싱가포르에서 개최된
                    '토큰2049' 컨퍼런스에 토론 패널로 참석해 "암호화폐에 낙관적
                    전망을 유지하고 있다"며 "최근 부정적인 거시 환경이 지속되고
                    있지만, 암호화…
                  </p>
                </div>

                <div className=" bg-red-500 p-2 flex items-center">
                  <div className=" w-[120px] h-[120px] bg-blue-200 "></div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default StockTab;
