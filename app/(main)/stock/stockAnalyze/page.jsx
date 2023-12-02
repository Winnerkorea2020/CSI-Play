import TableAnalyze from "@/components/table/TableAnalyze";
import TableList from "@/components/table/TableList";

const StockAnalzePage = () => {
  const title = "증시분석";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default StockAnalzePage;
