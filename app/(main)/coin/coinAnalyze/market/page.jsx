import TableAnalyze from "@/components/table/TableAnalyze";

const page = () => {
  const title = "암호화폐 투자리포트";
  return (
    <div className="border px-5">
      <TableAnalyze title={title} />
    </div>
  );
};

export default page;
