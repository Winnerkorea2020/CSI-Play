import StockfuturesSpot from "@/components/StockfuturesSpot ";
import KpremiumStockQuotesRealTime from "@/components/KpremiumStockQuotesRealTime";
import FearGreedIndex from "@/components/FearGreedIndex";
import CurrencyLiquidation from "@/components/CurrencyLiquidation";
import Announcement from "@/components/Announcement";
import Liquidation from "@/components/Liquidation";
import BestCoinCurrency from "@/components/BestCoinCurrency";

import BannerYoutube from "@/components/BannerYoutube ";

export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 w-full">
      {/* 선물계산기&현물계산기 */}
      <div className="xl:col-span-8">
        <StockfuturesSpot />
      </div>
      {/* 배너 및 위젯 */}
      <div className="hidden xl:block xl:col-span-4">
        <div className="card w-full h-full">
          <div className="grid grid-cols-1 gap-2 h-full">
            <div className="w-full h-full">
              <BannerYoutube />
            </div>
            <div className="w-full h-full">
              <BannerYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* 김치프라임 */}
      <div className="xl:col-span-8">
        <div className=" w-full h-full">
          <KpremiumStockQuotesRealTime />
        </div>
      </div>
      {/* 배너 및 위젯 */}
      <div className="xl:block xl:col-span-4">
        <FearGreedIndex />
      </div>
      <div className="xl:col-span-6">
        <CurrencyLiquidation />
      </div>
      <div className="xl:col-span-6">
        <Announcement />
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
  );
}
