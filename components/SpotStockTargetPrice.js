import React from "react";

const SpotStockTargetPrice = () => {
  return (
    <div className="card tab-card mt-4 border">
      <div>
        <div className="flex justify-start items-center gap-2"></div>
        <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2 mt-3">
          <div className="">
            <div>
              <div className="mt-3 overflow-x-auto overscroll-y-auto">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 text-base">
                  <div className="flex justify-between items-center">
                    <div className="w-32 text-center bg-black text-white py-1.5 px-2 rounded-l">
                      매수가
                    </div>
                    <div className="flex items-center border rounded-r">
                      <input type="number" className="w-full py-1.5 px-2" />
                      <span className="px-2">USDT</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="w-32 text-center bg-black text-white py-1.5 px-2 rounded-l">
                      목표수익률
                    </div>
                    <div className="flex items-center border rounded-r">
                      <input type="number" className="w-full py-1.5 px-2" />
                      <span className="px-2">USDT</span>
                    </div>
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
          <div className="">
            <div className="rounded-lg shadow-sm border bg-gray-200 h-full">
              <div className="px-5 py-3">
                <h3 className="text-xl font-semibold">결과</h3>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-3 text-base">
                    <div className="flex justify-start items-center">
                      <div className="w-40 py-2.5 px-2">목표가(USD)</div>
                      <input
                        type="text"
                        value=""
                        disabled=""
                        placeholder="0"
                        className="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
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

export default SpotStockTargetPrice;
