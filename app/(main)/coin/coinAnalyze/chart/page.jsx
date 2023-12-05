import CardHorizonalTypeA from "@/components/card/CardHorizonalTypeA";
import Pagination from "@/components/pagination/Pagination";
import TableAnalyze from "@/components/table/TableAnalyze";
import TableChart from "@/components/table/TableChart";
import TableHeader from "@/components/table/TableHeader";
import { tableAnalyze } from "@/constant/table";
import Link from "next/link";

const page = () => {
  const title = "차트관점 (가상자산 최신뉴스와 리서치)";
  const topics = tableAnalyze;
  return (
    <div>
      <TableHeader title={title} />

      <CardHorizonalTypeA topics={topics} tag={true} />
    </div>
  );
};

export default page;
