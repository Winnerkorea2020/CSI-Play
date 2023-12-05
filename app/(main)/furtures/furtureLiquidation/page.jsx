import ChartTypeA from "@/components/chart/ChartTypeA";
import CurrencyLiquidation from "@/components/mainPage/currency/CurrencyLiquidation";
import LiquidationTypeA from "@/components/mainPage/liquidation/LiquidationTypeA";
import LiquidationTypeB from "@/components/mainPage/liquidation/LiquidationTypeB";
import Pagination from "@/components/pagination/Pagination";
import TableHeader from "@/components/table/TableHeader";
import TableListBody from "@/components/table/TableListBody";
import TableListHead from "@/components/table/TableListHead";

import {
  tableList,
  tableListHeadColumns,
  tableListHeadColumnsLiqu,
} from "@/constant/table";

const page = () => {
  const topics = tableList;
  return (
    <>
      <div>
        <h3 className="text-lg tracking-tighter font-medium py-2.5 px-2">
          청산비율
        </h3>
      </div>

      <div>
        <div className="xl:col-span-6">
          <CurrencyLiquidation />
        </div>
        <div className="xl:col-span-6">
          <ChartTypeA />
        </div>
        <div className="xl:col-span-6">
          {/* 거래서 청산 */}
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 border px-5 pb-3">
              <LiquidationTypeB />
            </div>
            <div className="col-span-2 border px-5 pb-3">
              <LiquidationTypeA />
            </div>
          </div>
        </div>
        <div className="xl:col-span-6">
          <div className="mt-3">
            <TableHeader title={"총 청산"} />
          </div>
          <table className="table__theme-1 w-full">
            <colgroup></colgroup>
            <TableListHead columns={tableListHeadColumnsLiqu} />
            <TableListBody
              columns={tableListHeadColumnsLiqu}
              tableData={topics}
            />
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default page;
