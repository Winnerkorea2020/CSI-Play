import MainTitle from "@/components/title/MainTitle";
import CardTypeA from "@/components/card/CardTypeA";
import { currencyCoinData } from "@/constant/main";
import SelectTypeA from "@/components/select/SelectTypeA";
import { selectTime } from "@/constant/Select";

const CurrencyLiquidation = () => {
  const title = "통화청산";
  const linkUrl = "/";
  const itemData = currencyCoinData;
  const selectData = selectTime;
  console.log(itemData);
  return (
    <div className="card h-full">
      <div className="flex justify-between items-center w-full">
        <div className="basis-1/2">
          <MainTitle title={title} url={linkUrl} />
        </div>
        <div className="basis-1/2">
          <div className="flex justify-end items-center gap-3">
            <SelectTypeA selectData={selectData} />
          </div>
        </div>
      </div>

      <div className="main__board--card">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-3">
          <CardTypeA itemData={itemData} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyLiquidation;
