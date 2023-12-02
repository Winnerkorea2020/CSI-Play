import TableList from "@/components/table/TableList";
import TableReport from "@/components/table/TableReport";

const StockEventPage = () => {
  const title = "공시&일시";
  return (
    <div className="border px-5">
      <TableList title={title} />
    </div>
  );
};

export default StockEventPage;
