import StockfuturesSpot from "@/components/mainPage/stock/StockfuturesSpot ";
import TableHeader from "@/components/table/TableHeader";

const page = () => {
  const title = "선물/현물 계산기";
  return (
    <div>
      <TableHeader title={title} />

      <div className="">
        <StockfuturesSpot />
      </div>
    </div>
  );
};

export default page;
