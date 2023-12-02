import TableAnalyze from "@/components/table/TableAnalyze";
import TableChart from "@/components/table/TableChart";

const CoinAnalyzeCoinPage = () => {
  const title = "코인분석";
  return (
    <div className="border px-5">
      <TableChart title={title} />
    </div>
  );
};

export default CoinAnalyzeCoinPage;
