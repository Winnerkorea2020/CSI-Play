import BoardTable from "@/components/BoardTable";

const CoinFreeBoard = () => {
  const title = "자유게시판";
  return (
    <div className="h-full bg-white">
      <BoardTable title={title} />
    </div>
  );
};

export default CoinFreeBoard;
