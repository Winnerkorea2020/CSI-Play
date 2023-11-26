// TradingViewCoinLongShot.jsx
"use client";

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewCoinLongShot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "490",
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "kr",
    });
    document
      .getElementsByClassName("tradingview-widget-container__widget")[0]
      .appendChild(script);

    return () => {
      document
        .getElementsByClassName("tradingview-widget-container__widget")[0]
        .removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://kr.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">트레이딩뷰에서 모든 시장 추적</span>
        </a>
      </div>
    </div>
  );
}
