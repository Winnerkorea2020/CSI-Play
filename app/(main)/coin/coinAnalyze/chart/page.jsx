import Pagination from "@/components/pagination/Pagination";
import TableChart from "@/components/table/TableChart";
import Link from "next/link";

const page = () => {
  const title = "차트분석";
  return (
    <div className="border px-5">
      <TableChart title={title} />
      <div className="flex justify-between items-center">
        <Pagination />
        <Link
          href="/create"
          className="py-2.5 px-6 w-24 text-center rounded-lg shadow bg-blue-500 text-white hover:bg-blue-600"
        >
          등록
        </Link>
      </div>
    </div>
  );
};

export default page;
