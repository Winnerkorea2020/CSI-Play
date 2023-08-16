import Ticker from "@/components/Ticker";
import CoinList from "@/components/CoinList";
import SignUpSignIn from "@/components/SignUpSignIn";
import Banner from "@/components/Banner";
import TopCoins from "@/components/TopCoins";
import StockfuturesSpot from "@/components/StockfuturesSpot ";

export default function Home() {
  return (
    <main className="mt-2">
      <Ticker />
      <section className="section">
        <div className="grid grid-cols-12 gap-2 w-full">
          {/* Left Side Section */}
          <div className="col-span-12 xl:col-span-10">
            <div className="grid grid-cols-12 w-full">
              <div className="col-span-12 xl:col-span-8">
                {/* 선물계산기&현물계산기 */}
                <StockfuturesSpot />
                {/* 배너 및 위젯 */}
                <div></div>
              </div>
            </div>
            <div className="xl:col-span-3"></div>
          </div>
          {/* Left Side Section */}
          <div className="col-span-12 xl:col-span-2">
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
