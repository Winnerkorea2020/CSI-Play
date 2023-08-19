import React from "react";

const FutureOpenPrice = () => {
  return (
    <div className="card tab-card mt-4 border">
      <div>
        <div className="grid grid-cols-1 gap-2 2xl:grid-cols-5 mt-3">
          <div className="col-span-3">
            <div>
              <div className="mt-3">
                <div className="overflow-x-auto overscroll-y-auto overscroll-x-contain">
                  {/* Table */}
                  <div className="table w-full min-w-max border border-gray-400 my-2">
                    <div className="table-row bg-gray-500 text-white divide-x divide-gray-400 text-center">
                      <div className="table-cell py-1.5 px-1 text-center">
                        Open
                      </div>
                      <div className="table-cell py-1.5 px-1">진입가(USDT)</div>
                      <div className="table-cell py-1.5 px-1">수량(BTC)</div>

                      <div className="table-cell py-1.5 px-1">ACTION</div>
                    </div>
                    <div className="table-row  divide-x divide-gray-400 text-center">
                      <div className="table-cell py-1.5 px-1 text-center">
                        1
                      </div>
                      <div className="table-cell py-1.5 px-1">
                        <div className="flex justify-end items-center">
                          <input
                            type="number"
                            placeholder="6,100,000"
                            className="text-end w-full mr-3 "
                          />
                          <span className="mr-1">USDT</span>
                        </div>
                      </div>
                      <div className="table-cell py-1.5 px-1 ">
                        <div className="flex justify-end items-center">
                          <input
                            type="number"
                            placeholder="6,100,000"
                            className="text-end w-full mr-3 "
                          />
                          <span className="mr-1">BTC</span>
                        </div>
                      </div>
                      <div className="table-cell py-1.5 px-1"></div>
                    </div>
                  </div>
                  {/* Table */}
                  <div className="table w-full min-w-max border border-gray-400 my-2">
                    <div className="table-row bg-gray-500 text-white divide-x divide-gray-400 text-center">
                      <div className="table-cell py-1.5 px-1 text-center">
                        Open
                      </div>
                      <div className="table-cell py-1.5 px-1">진입가(USDT)</div>
                      <div className="table-cell py-1.5 px-1">수량(BTC)</div>

                      <div className="table-cell py-1.5 px-1">ACTION</div>
                    </div>
                    <div className="table-row  divide-x divide-gray-400 text-center">
                      <div className="table-cell py-1.5 px-1 text-center">
                        1
                      </div>
                      <div className="table-cell py-1.5 px-1">
                        <div className="flex justify-end items-center">
                          <input
                            type="number"
                            placeholder="6,100,000"
                            className="text-end w-full mr-3 "
                          />
                          <span className="mr-1">USDT</span>
                        </div>
                      </div>
                      <div className="table-cell py-1.5 px-1 ">
                        <div className="flex justify-end items-center">
                          <input
                            type="number"
                            placeholder="6,100,000"
                            className="text-end w-full mr-3 "
                          />
                          <span className="mr-1">BTC</span>
                        </div>
                      </div>
                      <div className="table-cell py-1.5 px-1"></div>
                    </div>
                  </div>
                  {/* Table */}
                  <div className="table w-full min-w-max border border-gray-400 my-2">
                    <div className="table-row bg-gray-500 text-white divide-x divide-gray-400 text-center">
                      <div className="table-cell py-1.5 px-1 text-center">
                        Open
                      </div>
                      <div className="table-cell py-1.5 px-1">진입가(USDT)</div>
                      <div className="table-cell py-1.5 px-1">수량(BTC)</div>

                      <div className="table-cell py-1.5 px-1">ACTION</div>
                    </div>
                    <div className="table-row  divide-x divide-gray-400 text-center">
                      <div className="table-cell py-1.5 px-1 text-center">
                        1
                      </div>
                      <div className="table-cell py-1.5 px-1">
                        <div className="flex justify-end items-center">
                          <input
                            type="number"
                            placeholder="6,100,000"
                            className="text-end w-full mr-3 "
                          />
                          <span className="mr-1">USDT</span>
                        </div>
                      </div>
                      <div className="table-cell py-1.5 px-1 ">
                        <div className="flex justify-end items-center">
                          <input
                            type="number"
                            placeholder="6,100,000"
                            className="text-end w-full mr-3 "
                          />
                          <span className="mr-1">BTC</span>
                        </div>
                      </div>
                      <div className="table-cell py-1.5 px-1"></div>
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
