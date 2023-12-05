import TableList from "@/components/table/TableList";

const CoinFreeBoard = () => {
  const title = "자유게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} post={true} />
    </div>
  );
};

export default CoinFreeBoard;
