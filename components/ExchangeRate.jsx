import Script from "next/script";

const ExchangeRate = () => {
  return (
    <div className="overscroll-none mt-5 border rounded-lg p-2 h-full">
      <fxwidget-er
        inverse="false"
        amount="1"
        decimals="2"
        large="true"
        shadow="false"
        symbol="true"
        flag="true"
        changes="true"
        grouping="true"
        border="false"
        main-curr="USD"
        sel-curr="EUR,GBP,CAD,AUD,KRW,INR,MXN"
        background-color="#ffffff"
      ></fxwidget-er>
      <a href="https://currencyrate.today/">CurrencyRate</a>
      <Script
        async
        src="https://s.fx-w.io/widgets/exchange-rates/latest.js"
      ></Script>
    </div>
  );
};

export default ExchangeRate;
