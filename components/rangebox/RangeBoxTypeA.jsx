import Image from "next/image";
import React from "react";

const RangeBoxTypeA = ({ valueData }) => {
  return (
    <div>
      {valueData.map((value) => (
        <div className="flex justify-between items-center w-full py-2">
          <div className="basis-1/5 flex items-center justify-start px-5 gap-5">
            <div className="text-sm tracking-tighter font-medium">
              <Image src={value.img} width={25} height={25} />
            </div>
            <h3 className="text-lg tracking-tighter font-medium">
              {value.valueData}
            </h3>
          </div>
          <div className="basis-4/5 relative">
            <div className="relative w-full">
              <div className="w-full flex justify-between items-center px-5 py-1.5">
                <div className="tracking-tighter font-medium text-base">
                  Long(Taker Buy)
                </div>
                <div className="tracking-tighter font-medium text-base">
                  Shorts (Taker Sell)
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full relative">
                <div
                  className="bg-gray-600 text-xs font-medium text-blue-100 text-center p-4 leading-none rounded-l-full"
                  style={{ width: `${value.coinValue}%` }}
                >
                  {`${value.coinValue}%`}
                </div>
                <div
                  className="absolute top-0 right-0 bg-blue-400 text-xs font-medium text-blue-100 text-center p-4 leading-none rounded-r-full"
                  style={{ width: `calc(100% - ${value.coinValue}%)` }}
                >
                  {`${value.coinValue}%`}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RangeBoxTypeA;
