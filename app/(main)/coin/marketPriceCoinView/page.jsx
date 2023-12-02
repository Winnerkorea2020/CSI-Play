import CoinChartView from "@/components/coins/chart/CoinChartView";
import PremiumKChart from "@/components/mainPage/coins/premium/PremiumKChart";

const MarketPriceCoinView = () => {
  return (
    <div className="border rounded-lg shadow-sm h-full bg-white p-4">
      <div>
        <CoinChartView />
      </div>

      <div>
        <PremiumKChart />
      </div>
    </div>
  );
};

export default MarketPriceCoinView;
