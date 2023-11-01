import BoardTable from "@/components/board/BoardTable";

const CoinFreeBoard = () => {
  const title = "코인 자유게시판";
  return (
    <div className="h-full bg-white">
      <BoardTable title={title} />
    </div>
  );
};

export default CoinFreeBoard;
