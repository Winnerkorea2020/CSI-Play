import Image from "next/image";
import MainTitle from "@/components/title/MainTitle";
import KpremiumTable from "./table/KpremiumTable";
import KpremiumCalculator from "./calculator/KpremiumCalculator";

const KpremiumStockQuotesRealTime = () => {
  const title = "김치프리미엄 실시간 시세조회";
  const linkUrl = "/";
  return (
    <div className="card h-full">
      <MainTitle title={title} url={linkUrl} />

      <div className="main__calc--card">
        <div className="main__calc--top--wrap">
          <div className="main__calc--top--value">
            <Image src="./ico-bitcoin.svg" alt="" width={30} height={30} />
            <select
              defaultValue="0"
              id="select0"
              className="border px-2 py-1.5 rounded-lg"
            >
              <option value="0">비트코인(BTC)</option>
              <option value="1">비트코인(BTC)</option>
              <option value="2">비트코인(BTC)</option>
            </select>
          </div>
          <div>
            <dl className="main__calc--top--list">
              <dt className="main__calc--top--list--title">등락</dt>
              <dd className="ml-4 font-semibold">
                <span className="text-red-500">-2.33%</span>
              </dd>
              <dt className="main__calc--top--list--title">거래대금</dt>
              <dd className="ml-4 font-semibold">
                <span className="text-blue-500">2,333억</span>
              </dd>
            </dl>
          </div>
        </div>

        <KpremiumCalculator />
      </div>

      <div className="relative overflow-x-auto  bg-gray-100 mt-8">
        <KpremiumTable />
      </div>
    </div>
  );
};

export default KpremiumStockQuotesRealTime;
