import StockfuturesSpot from "@/components/StockfuturesSpot ";
import TradingViewCoinLongShot from "@/components/TradingView/TradingViewCoinLongShot";

const page = () => {
  return (
    <div>
      <h3 className="text-lg tracking-tighter font-medium py-2.5 px-2">
        계산기
      </h3>
      <div>
        <TradingViewCoinLongShot />
      </div>
      <div className="xl:col-span-8">
        <StockfuturesSpot />
      </div>
    </div>
  );
};

export default page;
