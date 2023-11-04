import TableCard from "@/components/table/TableCard";

const StockNewsPage = () => {
  const title = "주식뉴스";
  return (
    <div className="border px-5">
      <TableCard title={title} />
    </div>
  );
};

export default StockNewsPage;
