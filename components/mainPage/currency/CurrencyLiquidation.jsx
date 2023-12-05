import { currencyCoinData } from "@/constant/main";
import { selectTime } from "@/constant/Select";
import CardTypeB from "@/components/card/CardTypeB";
import TableHeader from "@/components/table/TableHeader";

const CurrencyLiquidation = () => {
  const title = "총 청산";
  const linkUrl = "/";
  const itemData = currencyCoinData;
  const selectData = selectTime;
  return (
    <div className="card h-full">
      <div className="h-full">
        <TableHeader title={title} />

        <div className="main__board--card h-full">
          <CardTypeB itemData={itemData} />
        </div>
        <div className="mt-3">
          <ul className="border py-2 px-6 bg-gray-200 rounded text-sm">
            <li>
              지난 24시간 동안 47,205명의 트레이더가 청산되었으며, 총 청산액은
              <span className="font-semibold px-1 text-blue-500">
                $135.77
              </span>{" "}
              million.
            </li>
            <li>
              가장 큰 단일 청산 주문은 OKX - BTC-USDT-SWAP 에서
              <span className="font-semibold px-1 text-red-500">$7.95</span>
              M.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrencyLiquidation;
