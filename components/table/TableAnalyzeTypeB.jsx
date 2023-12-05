import { tableAnalyze } from "@/constant/table";
import TableBottom from "./TableBottom";
import TableHeader from "./TableHeader";
import TableAnalyzeBodyTypeB from "./TableAnalyzeBodyTypeB";

const TableAnalyzeTypeB = ({ title }) => {
  const topics = tableAnalyze;
  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} />
      <TableAnalyzeBodyTypeB topics={topics} />
      <TableBottom />
    </div>
  );
};

export default TableAnalyzeTypeB;
