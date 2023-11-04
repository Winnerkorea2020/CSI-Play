import StockfuturesSpot from "@/components/StockfuturesSpot ";
import KpremiumStockQuotesRealTime from "@/components/KpremiumStockQuotesRealTime";
import FearGreedIndex from "@/components/FearGreedIndex";
import CurrencyLiquidation from "@/components/CurrencyLiquidation";
import Announcement from "@/components/Announcement";
import Liquidation from "@/components/Liquidation";
import BestCoinCurrency from "@/components/BestCoinCurrency";

import BannerYoutube from "@/components/BannerYoutube ";
import CoinList from "@/components/CoinList";
import Banner from "@/components/Banner";
import TopCoins from "@/components/topcoin/TopCoins";

export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 w-full xl:gap-2 h-full">
      <div className="xl:col-span-10 h-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 w-full ">
          {/* 선물계산기&현물계산기 */}
          <div className="xl:col-span-8 h-full ">
            <StockfuturesSpot />
          </div>
          {/* 배너 및 위젯 */}
          <div className="hidden xl:block xl:col-span-4">
            <div className="card w-full h-full">
              <div className="grid grid-cols-1 gap-2 h-full">
                <div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/qJMdthxnDlY?si=NXgVXMsPcOfEGFyE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullscreen
                  ></iframe>
                </div>
                {/* <div className="w-full h-full"><BannerYoutube /></div>
                <div className="w-full h-full"><BannerYoutube /></div> */}
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
      </div>
      <div className="xl:col-span-2">
        {/* Sign In and Best Coin List */}
        <div className="hidden xl:block">
          <CoinList />
        </div>
        <Banner />
        <TopCoins />
      </div>
    </div>
  );
}
