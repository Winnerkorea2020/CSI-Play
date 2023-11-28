import TableReport from "@/components/table/TableReport";

const page = () => {
  const title = "암호화폐 투자리포트";
  return (
    <div className="border px-5">
      <TableReport title={title} />
    </div>
  );
};

export default page;
