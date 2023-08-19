const SpotStockTargetPrice = () => {
  return (
    <div className="card mt-4 border">
      <div>
        <div className="futureSpotStock__card">
          <div className="futureSpotStock--range">
            <div className="futureSpotStock__spot--input--card">
              <div className="futureSpotStock__input--item--wrap">
                <div className="futureSpotStock__input--item">
                  <div className="input__title--box">매수가</div>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    className="input__default text-end"
                  />
                  <div className="futureSpotStock__result--item--unit">
                    USDT
                  </div>
                </div>
                <div className="futureSpotStock__input--item">
                  <div className="input__title--box">목표 수익률</div>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    maxLength={3}
                    className="input__default text-end"
                  />
                  <div className="futureSpotStock__result--item--unit">%</div>
                </div>
              </div>
              <div className="futureSpotStock__button--card ">
                <button className="btn btn-blue futureSpotStock__button">
                  계산
                </button>
              </div>
            </div>
          </div>
          {/* 결과 */}
          <div className="cols-span-2 h-full">
            <div className="futureSpotStock__result--card">
              <h3 className="futureSpotStock__result-title">결과</h3>
              <div className="futureSpotStock__result--card">
                <div className="futureSpotStock__result--list">
                  <div className="futureSpotStock__result--item">
                    <div className="input__title--box">목표가</div>
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
    </div>
  );
};

export default SpotStockTargetPrice;
