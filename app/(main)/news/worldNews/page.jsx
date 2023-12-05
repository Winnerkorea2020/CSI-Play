import TableList from "@/components/table/TableList";
import TableReport from "@/components/table/TableReport";

const page = () => {
  const title = "News";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
