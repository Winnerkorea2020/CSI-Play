import { tableAnalyze } from "@/constant/table";
import TableAnalyzeTypeB from "@/components/table/TableAnalyzeTypeB";

const page = () => {
  const title = "부동산 뉴스";
  const topics = tableAnalyze;

  return (
    <div>
      <TableAnalyzeTypeB title={title} />
    </div>
  );
};

export default page;
