import React from "react";

const CardTypeB = ({ itemData }) => {
  return (
    <div className="grid grid-cols-4 gap-2 items-center w-full">
      {itemData.map((data) => {
        return (
          <div className="border rounded px-5 text-center w-full">
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2">
              <div className="w-full">
                <span>1시간 Rekt</span>
              </div>
              <div className="w-full">
                <span>$</span>
                <span>{data.value}</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2">
              <div className="w-full">
                <span>Long</span>
              </div>
              <div className="w-full">
                <span>$</span>
                <span>{data.value}</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2">
              <div className="w-full">
                <span>Short</span>
              </div>
              <div className="w-full">
                <span>$</span>
                <span>{data.value}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardTypeB;
