import TableAnalyzeBody from "./TableAnalyzeBody";
import TableHeader from "./TableHeader";

import { tableAnalyze } from "@/constant/table";
import TableBottom from "./TableBottom";

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
