import Ticker from "@/components/Ticker";
import CoinList from "@/components/CoinList";
import Banner from "@/components/Banner";
import TopCoins from "@/components/TopCoins";
import StockfuturesSpot from "@/components/StockfuturesSpot ";
import KpremiumStockQuotesRealTime from "@/components/KpremiumStockQuotesRealTime";
import FearGreedIndex from "@/components/FearGreedIndex";
import CurrencyLiquidation from "@/components/CurrencyLiquidation";
import Announcement from "@/components/Announcement";
import Liquidation from "@/components/Liquidation";
import BestCoinCurrency from "@/components/BestCoinCurrency";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full ">
      <Header />
      <main className="mt-2 flex-1">
        <Ticker />
        <section className="section">
          <div className="grid grid-cols-1 xl:grid-cols-12 w-full xl:gap-2">
            {/* Left Side Section Level 1*/}
            <div className="xl:col-span-10">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 w-full">
                {/* 선물계산기&현물계산기 */}
                <div className="xl:col-span-8">
                  <StockfuturesSpot />
                </div>
                {/* 배너 및 위젯 */}
                <div className="hidden xl:block xl:col-span-4">
                  <div className="card w-full h-full">AI API</div>
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
              {/* 배너 및 위젯 */}
              <div className="xl:col-span-3"></div>
              {/* Left Side Section Level 1*/}
            </div>

            {/* Right Side Section */}
            <div className="xl:col-span-2">
              {/* Sign In and Best Coin List */}
              <div className="hidden xl:block">
                <CoinList />
              </div>
              <Banner />
              <TopCoins />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
