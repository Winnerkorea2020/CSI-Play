import RangeBoxTypeA from "@/components/rangebox/RangeBoxTypeA";
import SearchBoxTypeB from "@/components/search/SearchBoxTypeB";
import TradingViewCoinLongShot from "@/components/tradingView/TradingViewCoinLongShot";
import { rangeCoin, rangeTime, rangeTrading } from "@/constant";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg tracking-tighter font-medium py-2.5 px-2">
            롱/숏 비율
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <SearchBoxTypeB title={"코인"} valueData={rangeCoin} />
          <SearchBoxTypeB title={"기간"} valueData={rangeTime} />
        </div>
      </div>
      <div className="mt-5">
        <div className="h-[548px] w-full ">
          <TradingViewCoinLongShot />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h3 className="text-lg tracking-tighter font-medium">
            거래소 BTC 매수 및 매도
          </h3>
          <div className="flex items-center ">
            <SearchBoxTypeB title={"코인"} valueData={rangeCoin} />
            <SearchBoxTypeB title={"기간"} valueData={rangeTime} />
          </div>
        </div>

        <RangeBoxTypeA valueData={rangeTrading} />
      </div>
      <div className="mt-10">
        <div className="">
          <div>
            <div className="relative overflow-x-auto">
              <h3 className="text-lg tracking-tighter font-medium px-5 py-2.5 bg-gray-500 text-white">
                실시간 고래 거래 체결
              </h3>
              <table className="w-full text-sm text-left text-gray-500 ">
                <tbody>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>

                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      바이낸스 선물
                    </th>
                    <td className="px-6 py-4">$166,670</td>
                    <td className="px-6 py-4">13억</td>
                    <td className="px-6 py-4">$$1.14M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="relative overflow-x-auto">
              <h3 className="text-lg tracking-tighter font-medium px-5 py-2.5 bg-gray-500 text-white">
                실시간 고래 거래 입출금
              </h3>
              <table className="w-full text-sm text-left text-gray-500 ">
                <tbody>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div>특정 지갑에서 Binance로 입금</div>
                      <div>2022-12-17 15:34:15</div>
                    </th>
                    <td className="px-6 py-4">
                      <div>56억 입금</div>
                      <div>5,000,000 BUSD</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
