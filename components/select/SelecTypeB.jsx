import { rangeCoin, rangeTime } from "@/constant";
import SearchBoxTypeB from "../search/SearchBoxTypeB";

const SelectTypeB = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-lg tracking-tighter font-medium">{title}</h3>
      <div className="flex items-center ">
        <SearchBoxTypeB title={"코인"} valueData={rangeCoin} />
        <SearchBoxTypeB title={"기간"} valueData={rangeTime} />
      </div>
    </div>
  );
};

export default SelectTypeB;
