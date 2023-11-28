import { tableAnalyze } from "@/constant/table";
import TableAnalyzeBody from "./TableAnalyzeBody";
import TableBottom from "./TableBottom";
import TableHeader from "./TableHeader";

const TableAnalyze = ({ title }) => {
  const topics = tableAnalyze;
  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} />
      <TableAnalyzeBody topics={topics} />
      <TableBottom />
    </div>
  );
};

export default TableAnalyze;
