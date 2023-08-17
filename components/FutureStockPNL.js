"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import InputBoxRange from "./InputBoxRange";

const FutureStockPNL = () => {
  return (
    <div className="card tab-card mt-4 border">
      <div>
        <div className="flex justify-start items-center gap-2 w-44">
          <button className="tab tab__gray--light focus:bg-red-600 focus:text-white focus:outline-none">
            Long
          </button>
          <button className="tab tab__gray--light focus:bg-red-600 focus:text-white focus:outline-none">
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
                  <button class="btn btn-blue w-full outline-none rounded-lg">
                    계산
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div class="rounded-lg shadow-sm border bg-gray-200 h-full">
              <div class="px-5 py-3">
                <h3 class="text-xl font-semibold">결과</h3>
                <div class="mt-8">
                  <div class="grid grid-cols-1 gap-3 text-base">
                    <div class="flex justify-start items-center">
                      <div class="w-40 py-2.5 px-2">초기보증금</div>
                      <input
                        type="text"
                        value=""
                        disabled=""
                        placeholder="0"
                        class="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                      />
                      <div class="py-2.5 px-2 w-20">USDT</div>
                    </div>
                    <div class="flex justify-start items-center">
                      <div class="w-40 py-2.5 px-2">손익</div>
                      <input
                        type="text"
                        value=""
                        disabled=""
                        placeholder="0"
                        class="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                      />
                      <div class="py-2.5 px-2 w-20">USDT</div>
                    </div>
                    <div class="flex justify-start items-center">
                      <div class="w-40 py-2.5 px-2">수익률</div>
                      <input
                        type="text"
                        value=""
                        disabled=""
                        placeholder="0"
                        class="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                      />
                      <div class="py-2.5 px-2 w-20">%</div>
                    </div>
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
