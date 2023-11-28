import InputBoxRange from "@/components/inputbox/InputBoxRange";

const FutureMaxOpen = () => {
  return (
    <div className="card futureSpotStock">
      <div className="futureSpotStock__button--wrap">
        <button className="tab tab__gray--light futureSpotStock__button">
          Long
        </button>
        <button className="tab tab__gray--light futureSpotStock__button">
          Short
        </button>
      </div>
      <div className="futureSpotStock__card">
        <div className="futureSpotStock__card--content">
          {/* Select and Inputbox */}
          <div className="futureSpotStock--range">
            <InputBoxRange min={0} max={125} value={75} step={5} />
          </div>
          <h3 className="futureSpotStock__input--title">
            {`현재 래버리지에서 최대 포시션:`}{" "}
            <span className="ml-2">{`${2500} USDT`}</span>
          </h3>
          <div className="futureSpotStock__input--card">
            <div className="futureSpotStock__input--item--wrap">
              <div className="futureSpotStock__input--item">
                <div className="input__title--box">진입 가격</div>
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  className="input__default text-end"
                />
                <div className="futureSpotStock__result--item--unit">USDT</div>
              </div>
              <div className="futureSpotStock__input--item">
                <div className="input__title--box">계정 자산</div>
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  className="input__default text-end"
                />
                <div className="futureSpotStock__result--item--unit">USDT</div>
              </div>
            </div>
            <div className="futureSpotStock__button--card">
              <button className="btn btn-blue futureSpotStock__button">
                계산
              </button>
            </div>
          </div>
        </div>
        {/* 결과 */}
        <div className="futureSpotStock__card--content">
          <div className="futureSpotStock__result--card">
            <h3 className="futureSpotStock__result-title">결과</h3>
            <div className="futureSpotStock__result--card">
              <div className="futureSpotStock__result--list">
                <div className="futureSpotStock__result--item">
                  <div className="input__title--box">최대오픈(BTC)</div>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    disabled
                    className="input__default text-end"
                  />
                  <div className="futureSpotStock__result--item--unit">BTC</div>
                </div>
                <div className="futureSpotStock__result--item">
                  <div className="input__title--box">최대오픈(USDT)</div>
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

export default FutureMaxOpen;
