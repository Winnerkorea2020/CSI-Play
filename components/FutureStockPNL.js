"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import InputBoxRange from "./InputBoxRange";

const FutureStockPNL = () => {
  return (
    <div className="mt-2 card border">
      <div className="flex justify-between xl:justify-start items-center gap-2 w-full xl:w-44">
        <button className="tab tab__gray--light focus:bg-blue-600 focus:text-white focus:outline-none">
          Long
        </button>
        <button className="tab tab__gray--light focus:bg-blue-600 focus:text-white focus:outline-none">
          Short
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2 mt-3">
        <div className="">
          <InputBoxRange min={0} max={125} value={75} step={5} />
          <div>
            <h3 className="font-medium tracking-tighter mt-3">
              현재 래버리에서 최대 포시션:2500 USDT
            </h3>
            <div className="mt-3">
              <div className="grid grid-cols-1 gap-3 text-base">
                <div className="flex justify-start items-center border rounded-lg">
                  <div className="w-32 py-2.5 px-2">진입 가격</div>
                  <input
                    type="number"
                    value=""
                    placeholder="0"
                    className="text-end py-2.5 px-2 w-full focus:border-none outline-none"
                  />
                  <div className="py-2.5 px-2 w-20">USDT</div>
                </div>
                <div className="flex justify-start items-center border rounded-lg">
                  <div className="w-32 py-2.5 px-2">청산 가격</div>
                  <input
                    type="number"
                    value=""
                    placeholder="0"
                    className="text-end py-2.5 px-2 w-full focus:border-none outline-none"
                  />
                  <div className="py-2.5 px-2 w-20">USDT</div>
                </div>
                <div className="flex justify-start items-center border rounded-lg">
                  <div className="w-32 py-2.5 px-2">수량</div>
                  <input
                    type="number"
                    value=""
                    placeholder="0"
                    className="text-end py-2.5 px-2 w-full focus:border-none outline-none"
                  />
                  <div className="py-2.5 px-2 w-20">BTC</div>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-blue w-full outline-none rounded-lg">
                  계산
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="">
            <div className="px-5 py-3">
              <h3 className="text-xl font-semibold">결과</h3>
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-3 text-base">
                  <div className="flex justify-start items-center">
                    <div className="bg-gray-300 w-fullduckduc">초기보증금</div>
                    <input
                      type="text"
                      value=""
                      disabled=""
                      placeholder="0"
                      className="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                    />
                    <div className="py-2.5 px-2 w-20">USDT</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-40 py-2.5 px-2">손익</div>
                    <input
                      type="text"
                      value=""
                      disabled=""
                      placeholder="0"
                      className="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                    />
                    <div className="py-2.5 px-2 w-20">USDT</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-40 py-2.5 px-2">수익률</div>
                    <input
                      type="text"
                      value=""
                      disabled=""
                      placeholder="0"
                      className="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                    />
                    <div className="py-2.5 px-2 w-20">%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureStockPNL;
