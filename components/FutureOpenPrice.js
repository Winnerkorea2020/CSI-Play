import React from "react";

const FutureOpenPrice = () => {
  return (
    <div>
      <div className="mt-3">
        <div className="grid grid-cols-1 gap-3 ">
          <div className="px-3 py-6 rounded-lg shadow-sm border bg-gray-50">
            <div className="w-full">
              <div className="grid grid-cols-3 gap-2">
                <select className="inline-block w-full px-3 py-2.5 rounded">
                  <option>단방향</option>
                </select>
                <div className="inline-block w-full px-3 py-2.5 rounded bg-blue-500 text-white text-center">Long</div>
                <div className="inline-block w-full px-3 py-2.5 rounded bg-gray-200 text-center">Short</div>
              </div>
            </div>

            <div className="mt-9"></div>

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
                    <div className="w-52 text-center py-2.5 px-2">예상 청산가(USD)</div>
                    <div className="border inline-flex rounded border-orange-400">
                      <input
                        type="number"
                        value=""
                        disabled
                        placeholder="0"
                        className="text-end py-2.5 px-2 w-full focus:border-none outline-none bg-none"
                      />
                      <div className="py-2.5 px-2 w-20">USDT</div>
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

export default FutureOpenPrice;
