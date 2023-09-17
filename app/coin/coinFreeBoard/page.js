import FreeBoardSearchBar from "@/components/FreeBoardSearchBar";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";

const CoinFreeBoard = () => {
  const title = "자유게시판";
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <h6 className="py-4 font-semibold underline text-lg">{title}</h6>
      <div className="mb-4">
        <FreeBoardSearchBar />
      </div>
      {/* Table */}
      <Table />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default CoinFreeBoard;
