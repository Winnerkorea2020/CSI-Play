import TableList from "@/components/table/TableList";

const CoinFreeBoard = () => {
  const title = "코인공시&이벤트";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default CoinFreeBoard;
