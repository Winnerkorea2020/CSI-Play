import TableList from "@/components/table/TableList";

const page = () => {
  const title = "공지사항";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
