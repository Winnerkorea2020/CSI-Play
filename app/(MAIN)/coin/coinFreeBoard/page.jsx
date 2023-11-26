import BoardTable from "@/components/Board/BoardTable";
import TableList from "@/components/table/TableList";

const CoinFreeBoard = () => {
  const title = "코인 자유게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default CoinFreeBoard;
