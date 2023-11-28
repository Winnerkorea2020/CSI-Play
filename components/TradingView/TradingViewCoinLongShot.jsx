// TradingViewCoinLongShot.jsx
"use client";

import React, { useEffect, useRef } from "react";

const SCRIPT_SOURCE =
  "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";

const widgetConfig = {
  width: "100%",
  height: "490",
  defaultColumn: "overview",
  screener_type: "crypto_mkt",
  displayCurrency: "USD",
  colorTheme: "light",
  locale: "kr",
};

export default function TradingViewCoinLongShot() {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_SOURCE;
    script.async = true;
    script.innerHTML = JSON.stringify(widgetConfig);

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
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
