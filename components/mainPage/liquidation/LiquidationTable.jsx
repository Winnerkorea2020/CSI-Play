import { coinValueColumns, coinValueData } from "@/constant/notice";
import LiquidationTableBody from "./LiquidationTableBody";
import LiquidationTableHead from "./LiquidationTableHead";

const LiquidationTable = () => {
  return (
    <div className="main__trading__table">
      <LiquidationTableHead columns={coinValueColumns} />
      {/* 합계 */}
      <div className="main__trading__table--tbody">
        <div className="main__trading__table--tbody--cell">합계</div>
        <div className="main__trading__table--tbody--cell">25,630M</div>
        <div className="main__trading__table--tbody--cell">25,630M</div>
        <div className="main__trading__table--tbody--cell">223M</div>
        <div className="main__trading__table--tbody--cell">
          <div className="shadow w-full bg-gray-300 rounded">
            <div
              className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
              style={{ width: `45%` }}
            >
              45%
            </div>
          </div>
        </div>
        <div className="main__trading__table--tbody--cell">
          <span className="hidden xl:inline-block">99.13</span>
          <span>Long</span>
        </div>
      </div>
      <LiquidationTableBody
        columns={coinValueColumns}
        tableData={coinValueData}
      />
    </div>
  );
};

export default LiquidationTable;
