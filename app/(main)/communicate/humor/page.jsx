import TableList from "@/components/table/TableList";

const page = () => {
  const title = "유머/감동";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
