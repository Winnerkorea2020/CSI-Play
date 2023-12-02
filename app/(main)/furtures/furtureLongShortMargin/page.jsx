"use client";
import Checkbox from "@/components/checkbox/Checkbox";
import RangeBoxTypeA from "@/components/rangebox/RangeBoxTypeA";
import SearchBoxTypeB from "@/components/search/SearchBoxTypeB";
import SelectTypeB from "@/components/select/SelecTypeB";
import SelecTypeB from "@/components/select/SelecTypeB";
import TradingViewCoinLongShot from "@/components/tradingView/TradingViewCoinLongShot";
import { rangeCoin, rangeTime, rangeTrading } from "@/constant";

const page = () => {
  const onChange = () => {
    console.log("title");
  };
  return (
    <div>
      <SelecTypeB title={" 롱/숏 비율"} />

      <div className="mt-5">
        <div className="h-[548px] w-full ">
          <TradingViewCoinLongShot />
        </div>
      </div>
      <div className="">
        <SelectTypeB title={" 거래소 BTC 매수 및 매도"} />

        <div>
          <p>
            해당 차트는 가격 움직임에 따라 청산될 위험에 있는 고배율 포지션
            (증거금 합) 을 나타내며, 시장 내 단기적 청산 물량 및 포지션에 대한
            정보를 제공합니다.
          </p>

          <RangeBoxTypeA valueData={rangeTrading} />
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-2">
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

            <div className="w-56">
              <div className="border rounded p-5">
                <div>실시간 체결 오디오 세팅</div>
                <div className="my-10">
                  <Checkbox
                    title={"청산만 표시"}
                    checked={true}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="volume">볼륨</label>
                  <input type="range" />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <label htmlFor="" className="pr-2">
                      표시
                    </label>
                    <input type="number" className="border w-10" />억 이상 표시
                  </div>
                  <div>
                    <label htmlFor="" className="pr-2">
                      소리
                    </label>
                    <input type="number" className="border w-10" />억 이상 표시
                  </div>
                </div>
              </div>
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
