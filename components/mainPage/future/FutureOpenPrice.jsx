import React from "react";

const FutureOpenPrice = () => {
  return (
    <div className="card futureSpotStock">
      <div className="futureSpotStock__card">
        <div className="col-span-3">
          <div className="futureSpotStock__table--wrap">
            {/* Table */}
            <div className="futureSpotStock__table">
              <div className="futureSpotStock__table--row">
                <div className="futureSpotStock__table--cell">Open</div>
                <div className="futureSpotStock__table--cell">진입가(USDT)</div>
                <div className="futureSpotStock__table--cell">수량(BTC)</div>
                <div className="futureSpotStock__table--cell">선물잔고</div>
                <div className="futureSpotStock__table--cell">ACTION</div>
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
            <div className="futureSpotStock__table">
              <div className="futureSpotStock__table--row">
                <div className="futureSpotStock__table--cell">Open</div>
                <div className="futureSpotStock__table--cell">진입가(USDT)</div>
                <div className="futureSpotStock__table--cell">수량(BTC)</div>
                <div className="futureSpotStock__table--cell">선물잔고</div>
                <div className="futureSpotStock__table--cell">ACTION</div>
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
            <div className="futureSpotStock__table">
              <div className="futureSpotStock__table--row">
                <div className="futureSpotStock__table--cell">Open</div>
                <div className="futureSpotStock__table--cell">진입가(USDT)</div>
                <div className="futureSpotStock__table--cell">수량(BTC)</div>
                <div className="futureSpotStock__table--cell">선물잔고</div>
                <div className="futureSpotStock__table--cell">ACTION</div>
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
          <div className="futureSpotStock__button--card ">
            <button className="btn btn-blue futureSpotStock__button">
              계산
            </button>
          </div>
        </div>
        {/* 결과 */}
        <div className="cols-span-2 h-full">
          <div className="futureSpotStock__result--card">
            <h3 className="futureSpotStock__result-title">결과</h3>
            <div className="futureSpotStock__result--card">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center border rounded-lg">
                  <div className="input__title--box">평단가(USDT)</div>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    disabled
                    className="input__default text-end"
                  />
                  <div className="futureSpotStock__result--item--unit">
                    USDT
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
