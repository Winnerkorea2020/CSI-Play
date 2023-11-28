import TableHeader from "./TableHeader";
import { tableNews } from "@/constant/table";
import TableCardBody from "./TableCardBody";
import TableBottom from "./TableBottom";

const TableCard = ({ title }) => {
  const topics = tableNews;

  return (
    <div className="relative overflow-x-auto">
      <TableHeader title={title} />
      <TableCardBody topics={topics} />

      <TableBottom />
    </div>
  );
};

export default TableCard;
