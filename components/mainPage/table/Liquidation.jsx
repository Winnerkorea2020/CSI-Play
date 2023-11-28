import Image from "next/image";
import MainTitle from "@/components/title/MainTitle";
import SelectTypeA from "@/components/select/SelectTypeA";
import { selectTime, selectViews } from "@/constant/Select";
import LiquidationTable from "../liquidation/LiquidationTable";

const Liquidation = () => {
  const title = "거래소 청산";
  const linkUrl = "/";
  return (
    <div className="card h-full">
      <div className="flex flex-col items-start 2xl:flex-row 2xl:justify-between 2xl:items-center w-full">
        <div className="basis-1/2">
          <MainTitle title={title} url={linkUrl} />
        </div>
        <div className="basis-1/2">
          <div className="flex justify-between xl:justify-end items-center gap-3">
            <div className="flex flex-col items-start justify-between sm:flex-row gap-2 sm:items-center">
              <label
                htmlFor="currencylist_2"
                className="block font-medium py-2.5 text-base text-end"
              >
                코인
              </label>
              <SelectTypeA selectData={selectViews} />
            </div>
            <div className="flex flex-col items-start justify-between sm:flex-row gap-2 sm:items-center">
              <label
                htmlFor="currencylist_1"
                className="block font-medium py-2.5 text-base text-end"
              >
                기간
              </label>
              <SelectTypeA selectData={selectTime} />
            </div>
          </div>
        </div>
      </div>

      <div className="main__board--card overflow-x-auto">
        <div className="w-full overscroll-x-contain">
          <LiquidationTable />
        </div>
      </div>
    </div>
  );
};

export default Liquidation;
