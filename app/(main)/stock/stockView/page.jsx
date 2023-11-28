import TableHeader from "@/components/table/TableHeader";
import TradingViewWidget from "@/components/tradingView/TradingViewWidget";
import TradingViewWidgetUSA from "@/components/tradingView/TradingViewWidgetUSA";

const StockViewPage = () => {
  const title = "국내/해외증시";
  return (
    <div>
      <TableHeader title={title} nosearch={false} />
      <div className="px-2.5">
        <div className="grid grid-cols-1 gap-3">
          <div className="h-[520px]">
            <div className="h-full py-5">
              <TradingViewWidget />
            </div>
          </div>
          <div className="h-[520px]">
            <div className="h-full py-5">
              <TradingViewWidgetUSA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockViewPage;
