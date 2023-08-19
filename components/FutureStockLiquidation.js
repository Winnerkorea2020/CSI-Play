const FutureStockLiquidation = () => {
  return (
    <div className="card tab-card mt-4 border">
      <div className="flex justify-start items-center gap-2">
        <div className="flex flex-col w-full gap-2 xl:flex-row items-center justify-between">
          <select className="tab border bg-gray-500 text-white ">
            <option>단방향</option>
          </select>
          <div className="flex justify-between xl:justify-start items-center gap-2 w-full xl:w-44">
            <button className="tab tab__gray--light focus:bg-blue-600 focus:text-white focus:outline-none">
              Long
            </button>
            <button className="tab tab__gray--light focus:bg-blue-600 focus:text-white focus:outline-none">
              Short
            </button>
          </div>
        </div>
      </div>
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
                    <div className="table-cell py-1.5 px-1">선물잔고</div>
                    <div className="table-cell py-1.5 px-1">ACTION</div>
                  </div>
                  <div className="table-row  divide-x divide-gray-400 text-center">
                    <div className="table-cell py-1.5 px-1 text-center">1</div>
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
                    <div className="table-cell py-1.5 px-1 ">
                      <div className="flex justify-end items-center">
                        <input
                          type="number"
                          placeholder="6,100,000"
                          className="text-end w-full mr-3 "
                        />
                        <span className="mr-1">USDT</span>
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
                    <div className="table-cell py-1.5 px-1">선물잔고</div>
                    <div className="table-cell py-1.5 px-1">ACTION</div>
                  </div>
                  <div className="table-row  divide-x divide-gray-400 text-center">
                    <div className="table-cell py-1.5 px-1 text-center">1</div>
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
                    <div className="table-cell py-1.5 px-1 ">
                      <div className="flex justify-end items-center">
                        <input
                          type="number"
                          placeholder="6,100,000"
                          className="text-end w-full mr-3 "
                        />
                        <span className="mr-1">USDT</span>
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
                    <div className="table-cell py-1.5 px-1">선물잔고</div>
                    <div className="table-cell py-1.5 px-1">ACTION</div>
                  </div>
                  <div className="table-row  divide-x divide-gray-400 text-center">
                    <div className="table-cell py-1.5 px-1 text-center">1</div>
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
                    <div className="table-cell py-1.5 px-1 ">
                      <div className="flex justify-end items-center">
                        <input
                          type="number"
                          placeholder="6,100,000"
                          className="text-end w-full mr-3 "
                        />
                        <span className="mr-1">USDT</span>
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
        {/* 결과 */}
        <div className="h-full">
          <div className="mt-3">
            <h3 className="text-xl font-semibold">결과</h3>
            <div className="mt-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center border rounded-lg">
                  <div className="input__title--box">예상 청산가(USDT)</div>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    disabled
                    className="input__default text-end"
                  />
                  <div className="py-2.5 px-2 w-20">USDT</div>
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
