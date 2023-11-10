import TableReport from "@/components/table/TableReport";

const StockEventPage = () => {
  const title = "공시&일시";
  return (
    <div className="border px-5">
      <TableReport title={title} />
    </div>
  );
};

export default StockEventPage;
