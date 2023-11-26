"use client";

import BestCoinCurrency from "@/components/BestCoinCurrency";
import CurrencyLiquidation from "@/components/CurrencyLiquidation";
import Liquidation from "@/components/Liquidation";
import TradingViewCoinLongShot from "@/components/TradingView/TradingViewCoinLongShot";

const page = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg tracking-tighter font-medium py-2.5 px-2">
          청산비율
        </h3>
      </div>

      <div>
        <div>
          <TradingViewCoinLongShot />
        </div>
        <div className="xl:col-span-6">
          <CurrencyLiquidation />
        </div>
        <div className="xl:col-span-6">
          {/* 거래서 청산 */}
          <Liquidation />
        </div>
        <div className="xl:col-span-6">
          {/* Best 코인 시세 */}
          <BestCoinCurrency />
        </div>
      </div>
    </div>
  );
};

export default page;
