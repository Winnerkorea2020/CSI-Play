import { alaramSetting } from "@/constant";
import React from "react";

const MarketingAgreed = () => {
  return (
    <div className="isolate bg-white ">
      <div className="mx-auto px-8 sm:mt-5">
        <h3 className="text-2xl font-semibold ">알람설정하기</h3>
        <div className="grid grid-cols-2 bg-white gap-5">
          {alaramSetting.map((category, index) => (
            <div className="w-full mx-auto">
              <h3
                key={index}
                className="text-lg tracking-tighter font-semibold py-2.5 px-5"
              >
                {category.category}
              </h3>
              <div className="border py-2.5 px-5 rounded-lg">
                {category.items.map((items, subindex) => (
                  <div
                    key={subindex}
                    className="flex justify-between items-center py-5 px-5"
                  >
                    <div className="text-lg">{items.title}</div>

                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingAgreed;
