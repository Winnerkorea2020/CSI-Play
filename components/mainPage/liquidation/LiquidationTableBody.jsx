import Image from "next/image";

const LiquidationTableBody = ({ columns, tableData }) => {
  return (
    <>
      {/* 코인정보 */}
      {tableData.map((data) => {
        return (
          <div key={data.id} className="main__trading__table--tbody">
            <div className="main__trading__table--tbody--cell">
              <Image
                className=" inline-block"
                src={`../${data.market}`}
                width={30}
                height={30}
              />
            </div>
            <div className="main__trading__table--tbody--cell">
              {data.liquidation}
            </div>
            <div className="main__trading__table--tbody--cell">
              {data.margin_buying}
            </div>
            <div className="main__trading__table--tbody--cell">
              {data.short_selling}
            </div>
            <div className="main__trading__table--tbody--cell">
              <div className="shadow w-full bg-gray-300 rounded">
                <div
                  className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                  style={{ width: `${data.percentage}` }}
                >
                  {data.percentage}
                </div>
              </div>
            </div>
            <div className="main__trading__table--tbody--cell">
              <span className="hidden xl:inline-block">
                {data.option_value}
              </span>
              <span>{data.option}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LiquidationTableBody;
