import BoardGrid from "@/components/board/BoardGrid";
import BoardTable from "@/components/board/BoardTable";

const CoinNewsPage = () => {
  const title = "코인뉴스";
  return (
    <div className="h-full bg-white">
      <BoardTable title={title} />
    </div>
  );
};

export default CoinNewsPage;
