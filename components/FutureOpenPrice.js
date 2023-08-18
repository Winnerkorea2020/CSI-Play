import React from "react";

const FutureOpenPrice = () => {
  return (
    <div className="card tab-card mt-4 border">
      <div>
        <div className="grid grid-cols-1 gap-2 2xl:grid-cols-5 mt-3">
          <div className=" col-span-3">
            <div>
              <div className="mt-3 overflow-x-auto overscroll-y-auto">
                <div className="grid grid-cols-1  text-base">
                  <div className="grid grid-cols-12  ">
                    <div className="col-span-2 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        open
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-opnewrap bg-gray-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="col-span-4 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-opnewrap ">
                        진입가격(USDT)
                      </div>
                      <input
                        type={"number"}
                        className="py-1.5 px-1 text-end w-full whitespace-nowrap"
                        placeholder="0"
                      />
                    </div>
                    <div className="col-span-4 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        수량(BTC)
                      </div>
                      <input
                        type={"number"}
                        className="py-1.5 px-1 text-end w-full whitespace-nowrap"
                        placeholder="0"
                      />
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
                    <div className="col-span-2 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap">
                        open
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap bg-gray-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="col-span-4 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        진입가격(USDT)
                      </div>
                      <input
                        type={"number"}
                        className="py-1.5 px-1 text-end w-full whitespace-nowrap"
                        placeholder="0"
                      />
                    </div>
                    <div className="col-span-4 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        수량(BTC)
                      </div>
                      <input
                        type={"number"}
                        className="py-1.5 px-1 text-end w-full whitespace-nowrap"
                        placeholder="0"
                      />
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
                    <div className="col-span-2 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap">
                        open
                      </div>
                      <div className=" py-1.5 px-1 w-full whitespace-nowrap bg-gray-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="col-span-4 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        진입가격(USDT)
                      </div>
                      <input
                        type={"number"}
                        className="py-1.5 px-1 text-end w-full whitespace-nowrap"
                        placeholder="0"
                      />
                    </div>
                    <div className="col-span-4 py-1.5 text-center divide-x divide-x-reverse divide-y divide-y-reverse divide-gray-700">
                      <div className=" py-1.5 px-1 w-full bg-gray-500 text-white whitespace-nowrap ">
                        수량(BTC)
                      </div>
                      <input
                        type={"number"}
                        className="py-1.5 px-1 text-end w-full whitespace-nowrap"
                        placeholder="0"
                      />
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
                  <button className="btn btn-blue w-full outline-none rounded-lg">
                    계산
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-2">
            <div className="rounded-lg shadow-sm border bg-gray-200 h-full">
              <div className="px-5 py-3">
                <h3 className="text-xl font-semibold">결과</h3>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-3 text-base">
                    <div className="flex justify-start items-center">
                      <div className="w-40 py-2.5 px-2">평단가(USD)</div>
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

export default FutureOpenPrice;
