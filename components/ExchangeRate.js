import Script from "next/script";

const ExchangeRate = () => {
  return (
    <div className="overscroll-none">
      <div className="ex-1">
        <div className="ex-2">
          <span className="ex-3">
            <a
              href="https://www.exchangeratewidget.com/"
              className="ex-4"
              rel="nofollow"
            >
              US Dollar Exchange Rates
            </a>
          </span>
        </div>
        <Script
          type="text/javascript"
          src="https://www.exchangeratewidget.com/converter.php?l=en&f=USD&t=KRW,CNY,EUR,GBP,JPY,CAD,AUD,HKD,USD,&a=1&d=F0F0F0&n=FFFFFF&o=000000&v=5"
        ></Script>
      </div>
    </div>
  );
};

export default ExchangeRate;
