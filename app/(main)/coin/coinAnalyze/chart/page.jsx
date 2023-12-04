import Pagination from "@/components/pagination/Pagination";
import TableAnalyze from "@/components/table/TableAnalyze";
import TableChart from "@/components/table/TableChart";
import Link from "next/link";

const page = () => {
  const title = "차트관점 (가상자산 최신뉴스와 리서치)";
  return (
    <div className="border px-5">
      <TableAnalyze title={title} />
    </div>
  );
};

export default page;
