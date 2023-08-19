import Ticker from "@/components/Ticker";
import CoinList from "@/components/CoinList";
import SignUpSignIn from "@/components/SignUpSignIn";
import Banner from "@/components/Banner";
import TopCoins from "@/components/TopCoins";
import StockfuturesSpot from "@/components/StockfuturesSpot ";
import KpremiumStockQuotesRealTime from "@/components/KpremiumStockQuotesRealTime";
import FearGreedIndex from "@/components/FearGreedIndex";
import CurrencyLiquidation from "@/components/CurrencyLiquidation";
import Announcement from "@/components/Announcement";
import Liquidation from "@/components/Liquidation";
import BestCoinCurrency from "@/components/BestCoinCurrency";

export default function Home() {
  return (
    <main className="mt-2">
      <Ticker />
      <section className="section bg-red-500">
        <div className="grid grid-cols-1 xl:grid-cols-12 w-full">
          {/* Left Side Section Level 1*/}
          <div className="xl:col-span-10">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 w-full">
              {/* 선물계산기&현물계산기 */}
              <div className="xl:col-span-8">
                <StockfuturesSpot />
              </div>
              {/* 배너 및 위젯 */}
            </div>
            {/* 배너 및 위젯 */}
            <div className="xl:col-span-3"></div>
            {/* Left Side Section Level 1*/}
          </div>

          {/* Right Side Section */}
          <div className="xl:col-span-2">
            {/* Sign In and Best Coin List */}
            <div className="bg-white rounded-lg hidden xl:block">
              <CoinList />
              <SignUpSignIn />
            </div>
            <Banner />
            <TopCoins />
          </div>
        </div>
      </section>
    </main>
  );
}
