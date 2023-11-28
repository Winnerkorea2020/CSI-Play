import TableAnalyze from "@/components/table/TableAnalyze";

const page = () => {
  const title = "부동산 뉴스";
  return (
    <div className="h-full bg-white">
      <TableAnalyze title={title} />
    </div>
  );
};

export default page;
