import TableReport from "@/components/table/TableReport";

const page = () => {
  const title = "News";
  return (
    <div className="h-full bg-white">
      <TableReport title={title} />
    </div>
  );
};

export default page;
