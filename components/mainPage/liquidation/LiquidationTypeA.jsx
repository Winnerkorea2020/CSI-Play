import SelectTypeA from "@/components/select/SelectTypeA";
import TableHeader from "@/components/table/TableHeader";
import TableListBody from "@/components/table/TableListBody";
import TableListHead from "@/components/table/TableListHead";
import { tableList, tableListHeadColumns } from "@/constant/table";
import { selectTime, selectViews } from "@/constant/Select";
import React from "react";

const LiquidationTypeA = () => {
  const topics = tableList;

  return (
    <div>
      <div className="flex justify-between items-center">
        <TableHeader title={"실시간 청산"} />
        <div className="grid grid-cols-3 gap-2">
          <SelectTypeA selectData={selectViews} />
          <SelectTypeA selectData={selectViews} />
          <SelectTypeA selectData={selectViews} />
        </div>
      </div>
      <div className="w-full relative overflow-y-auto">
        <div className="grid grid-cols-4 w-full border px-5 py-2">
          <div>기호</div>
          <div className="">가격</div>
          <div className="">가치</div>
          <div className="text-right">시간</div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full border px-5 py-4">
          <div>SUPERUSDT</div>
          <div>$1554.153</div>
          <div>$50.8K</div>
          <div className="text-right">
            <div>12-05 14:17:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidationTypeA;
