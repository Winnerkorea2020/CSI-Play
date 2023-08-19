const SpotStockPrice = () => {
  return (
    <div className="card futureSpotStock">
      <div className="futureSpotStock__card">
        <div className="col-span-3">
          <div className="futureSpotStock__table--wrap ">
            {/* Table */}
            <div className="futureSpotStock__table">
              <div className="futureSpotStock__table--row">
                <div className="futureSpotStock__table--cell">Open</div>
                <div className="futureSpotStock__table--cell">진입가(USDT)</div>
                <div className="futureSpotStock__table--cell">수량(BTC)</div>
                <div className="futureSpotStock__table--cell">금액</div>
                <div className="futureSpotStock__table--cell">ACTION</div>
              </div>
              <div className="futureSpotStock__table--row">
                <div className="futureSpotStock__table--cell text-center">
                  1
                </div>
                <div className="futureSpotStock__table--cell">
                  <div className="flex justify-end items-center">
                    <input
                      type="number"
                      placeholder="6,100,000"
                      className="futureSpotStock__table--cell--input--box "
                    />
                    <span className="mr-1">USDT</span>
                  </div>
                </div>
                <div className="futureSpotStock__table--cell ">
                  <div className="flex justify-end items-center">
                    <input
                      type="number"
                      placeholder="6,100,000"
                      className="futureSpotStock__table--cell--input--box "
                    />
                    <span className="mr-1">BTC</span>
                  </div>
                </div>
                <div className="futureSpotStock__table--cell ">
                  <div className="flex justify-end items-center">
                    <input
                      type="number"
                      placeholder="6,100,000"
                      className="futureSpotStock__table--cell--input--box "
                    />
                    <span className="mr-1">USDT</span>
                  </div>
                </div>
                <div className="futureSpotStock__table--cell"></div>
              </div>
            </div>
            {/* Table */}
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
              <div className="futureSpotStock__result--list">
                <div className="futureSpotStock__result--item">
                  <div className="input__title--box">평균단가</div>
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
                <div className="futureSpotStock__result--item ">
                  <div className="input__title--box">수량</div>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    disabled
                    className="input__default text-end"
                  />
                  <div className="futureSpotStock__result--item--unit">BTC</div>
                </div>
                <div className="futureSpotStock__result--item ">
                  <div className="input__title--box">금액</div>
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

export default SpotStockPrice;
