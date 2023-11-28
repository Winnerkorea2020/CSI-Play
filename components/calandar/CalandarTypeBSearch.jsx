import React from "react";

const CalandarTypeBSearch = () => {
  return (
    <div>
      <div className=" bg-gray-400">
        <ul className="grid grid-cols-12 gap-0.5">
          <li className="col-span-6">
            <div className="w-full">
              <button className="py-2.5 px-3  text-white bg-yellow-500 w-full border">
                APT
              </button>
            </div>
            <div className="flex justify-between items-center gap-0.5 ">
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                특별공급
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                1순위
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                2순위
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                무순의
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                임의공급
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                취소후재공급
              </button>
            </div>
          </li>

          <li className="col-span-3">
            <div className="w-full">
              <button className="py-2.5 px-3  text-white bg-yellow-500 w-full border">
                민간사전청약 APT
              </button>
            </div>
            <div className="flex justify-between items-center gap-0.5 ">
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                특별공급
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                1순위
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border">
                2순위
              </button>
            </div>
          </li>
          <li className="col-span-3">
            <div className="flex justify-between items-center h-full">
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border h-full">
                오피스텔/생황숙박시설/도시형생활주택/민간임대
              </button>
              <button className="py-2.5 px-3  text-white bg-blue-500 w-full border h-full">
                공공지원민간임대
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CalandarTypeBSearch;
