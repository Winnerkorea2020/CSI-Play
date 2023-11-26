import TableAnalyze from "@/components/table/TableAnalyze";

const StockAnalzePage = () => {
  const title = "증시분석";
  return (
    <div className="h-full bg-white">
      <TableAnalyze title={title} />
    </div>
  );
};

export default StockAnalzePage;
