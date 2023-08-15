import React from "react";

const FutureStockPNL = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ">
        <div className="px-3 py-6 rounded-lg shadow-sm border bg-gray-50">
          <div className="w-full inline-flex justify-between items-center">
            <div className="inline-block w-full px-3 py-2.5 rounded-l-lg bg-blue-500 text-white text-center">
              Long
            </div>
            <div className="inline-block w-full px-3 py-2.5 rounded-r-lg bg-gray-200 text-center">
              Short
            </div>
          </div>

          <div className="mt-9">
            <div className="w-full relative mb-9">
              <div>
                <div className="mb-5">
                  <div className="text-xl tracking-tighter">
                    <div className="inline">현재 레버리지 :</div>
                    <div className="inline font-bold">
                      <output id="value" className="font-medium"></output>
                      <span>x</span>
                    </div>
                  </div>
                </div>

                <input
                  type="range"
                  list="tickmarks"
                  value="0"
                  min="1"
                  max="125"
                  className="w-full"
                  id="pi_input"
                />
                <datalist id="tickmarks">
                  <option value="0"></option>
                  <option value="25"></option>
                  <option value="50"></option>
                  <option value="75"></option>
                  <option value="100"></option>
                  <option value="125"></option>
                </datalist>
              </div>

              <div className="absolute w-full left-0">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-gray-500 text-base">
                    1x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    25x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    50x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    75x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    100x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    125x
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="font-medium text-gray-700">
              현재 레버리지에서 최대 포시션 :
              <span className="font-semibold text-base">250,000</span>
              USDT
            </h3>
          </div>

          <div className="mt-3">
            <form action="">
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
              <button className="w-full text-base py-2.5 px-2 border mt-3 bg-blue-500 text-white rounded-lg">
                계산
              </button>
            </form>
          </div>
        </div>

        <div className="px-3 py-6 rounded-lg shadow-sm border bg-gray-50">
          <div className="px-5 py-3">
            <h3 className="text-xl font-semibold">결과</h3>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-3 text-base">
                <div className="flex justify-start items-center">
                  <div className="w-32 py-2.5 px-2">초기보증금</div>
                  <input
                    type="number"
                    value=""
                    disabled
                    placeholder="0"
                    className="text-end py-2.5 px-2 w-full focus:border-none outline-none bg-none"
                  />
                  <div className="py-2.5 px-2 w-20">USDT</div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="w-32 py-2.5 px-2">손익</div>
                  <input
                    type="number"
                    value=""
                    disabled
                    placeholder="0"
                    className="text-end py-2.5 px-2 w-full focus:border-none outline-none bg-none"
                  />
                  <div className="py-2.5 px-2 w-20">USDT</div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="w-32 py-2.5 px-2">수익률</div>
                  <input
                    type="number"
                    value=""
                    disabled
                    placeholder="0"
                    className="text-end py-2.5 px-2 w-full focus:border-none outline-none bg-none"
                  />
                  <div className="py-2.5 px-2 w-20">%</div>
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
