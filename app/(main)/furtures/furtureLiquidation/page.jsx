import BestCoinCurrency from "@/components/mainPage/coins/BestCoinCurrency";
import CurrencyLiquidation from "@/components/mainPage/currency/CurrencyLiquidation";
import Liquidation from "@/components/mainPage/table/Liquidation";
import TradingViewCoinLongShot from "@/components/tradingView/TradingViewCoinLongShot";

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;
