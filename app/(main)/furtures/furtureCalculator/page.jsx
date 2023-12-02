import StockfuturesSpot from "@/components/mainPage/stock/StockfuturesSpot ";
import TableHeader from "@/components/table/TableHeader";

const page = () => {
  const title = "계산기";
  return (
    <div>
      <TableHeader title={title} nosearch={true} />

      <div className="xl:col-span-8">
        <StockfuturesSpot />
      </div>
    </div>
  );
};

export default page;
