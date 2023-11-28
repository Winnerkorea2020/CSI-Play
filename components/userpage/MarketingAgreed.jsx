import { menuItem } from "@/constant/menuItem";
import TableHeader from "../table/TableHeader";

const MarketingAgreed = () => {
  const title = "알람설정하기";
  return (
    <div className="px-5 py-5 bg-white ">
      <TableHeader title={title} />

      <div className="mx-auto px-1 xl:px-5 sm:mt-5">
        <div className="grid grid-cols-1 xl:grid-cols-2 bg-white gap-5">
          {menuItem.map((item, index) => (
            <div className="w-full mx-auto">
              <h3
                key={index}
                className="text-sm xl:text-lg tracking-tighter font-medium py-2.5 px-2"
              >
                {item.title}
              </h3>
              <div className="border  py-2.5 px-2 xl:px-5 rounded-lg">
                {item.submenu.map((items, subindex) => (
                  <div
                    key={subindex}
                    className="flex flex-row justify-between xl:items-center py-5 xl:px-5"
                  >
                    <div className="tracking-tighter text-sm xl:text-lg">
                      {items.title}
                    </div>

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
