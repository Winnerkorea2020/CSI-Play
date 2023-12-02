import TableCard from "@/components/table/TableCard";
import TableList from "@/components/table/TableList";

const page = () => {
  const title = "시황분석";
  return (
    <div className="border px-5">
      <TableList title={title} />
    </div>
  );
};

export default page;
