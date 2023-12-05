import SelectTypeA from "@/components/select/SelectTypeA";
import LiquidationTable from "../liquidation/LiquidationTable";
import TableHeader from "@/components/table/TableHeader";
import { selectTime, selectViews } from "@/constant/Select";

const LiquidationTypeB = () => {
  const title = "거래소 청산";
  const linkUrl = "/";
  return (
    <div className=" h-full">
      <div className="flex justify-between items-center">
        <TableHeader title={title} />
        <div className="grid grid-cols-2 gap-2">
          <SelectTypeA selectData={selectViews} />
          <SelectTypeA selectData={selectViews} />
        </div>
      </div>

      <LiquidationTable />
    </div>
  );
};

export default LiquidationTypeB;
