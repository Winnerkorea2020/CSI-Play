import TableList from "@/components/table/TableList";

const CoinNewsPage = () => {
  const title = "코인뉴스";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default CoinNewsPage;
