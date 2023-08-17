const FutureStockLiquidation = () => {
  return (
    <div className="card tab-card mt-4 border">
      <div>
        <div className="flex justify-start items-center gap-2">
          <div className="flex flex-col w-full gap-2 xl:flex-row items-center justify-between">
            <select className="tab ">
              <option>단방향</option>
            </select>

            <button className="tab tab__gray--light focus:bg-red-600 focus:text-white focus:outline-none">
              Long
            </button>
            <button className="tab tab__gray--light focus:bg-red-600 focus:text-white focus:outline-none">
              Short
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2 mt-3">
          <div className="">
            <div>
              <div className="mt-3 overflow-x-auto overscroll-y-auto">
                <div className="grid grid-cols-1  text-base">
                  <div className="grid grid-cols-12  ">
                    <div className="col-span-1 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        No
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap bg-gray-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        진입가격(USDT)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        수량(BTC)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        선물잔고(USDT)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-2 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        Action
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 ">
                    <div className="col-span-1 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap">
                        No
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap bg-gray-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        진입가격(USDT)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        수량(BTC)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        선물잔고(USDT)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-2 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        Action
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 ">
                    <div className="col-span-1 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap">
                        No
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap bg-gray-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        진입가격(USDT)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        수량(BTC)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-3 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        선물잔고(USDT)
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        6,120,000
                      </div>
                    </div>
                    <div className="col-span-2 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        Action
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap  ">
                        1
                      </div>
                    </div>
                  </div>{" "}
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
                      <div class="w-40 py-2.5 px-2">목표가(USD)</div>
                      <input
                        type="text"
                        value=""
                        disabled=""
                        placeholder="0"
                        class="text-end py-1.5 px-2 w-full focus:border-none outline-none bg-none"
                      />
                      <div class="py-2.5 px-2 w-20">USDT</div>
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

export default FutureStockLiquidation;
