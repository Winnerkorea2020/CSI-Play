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
              {data.long_rate}
            </div>
            <div className="main__trading__table--tbody--cell">
              {data.short_selling}
            </div>
            <div className="main__trading__table--tbody--cell">
              {data.percentage}
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
