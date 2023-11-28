import Image from "next/image";
import Link from "next/link";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { BiExpandVertical } from "react-icons/bi";

const BestFutures = () => {
  return (
    <div className="overflow-auto">
      <div className="main__bestcoinfuture__table">
        {/* Table Header */}
        <div className="main__bestcoinfuture__table--thread">
          <div className="main__bestcoinfuture__table--thread--cell">
            <div className="main__bestcoinfuture__table--thread--cell--item">
              거래소/심볼 <BiExpandVertical size={10} className="ml-2" />
            </div>
          </div>
          <div className="main__bestcoinfuture__table--thread--cell">
            <div className="main__bestcoinfuture__table--thread--cell--item">
              심볼 <BiExpandVertical size={10} className="ml-2" />
            </div>
          </div>
          <div className="main__bestcoinfuture__table--thread--cell">
            <div className="main__bestcoinfuture__table--thread--cell--item">
              현재가격 <BiExpandVertical size={10} className="ml-2" />
            </div>
          </div>
          <div className="main__bestcoinfuture__table--thread--cell">
            <div className="main__bestcoinfuture__table--thread--cell--item">
              미체결약정 <BiExpandVertical size={10} className="ml-2" />
            </div>
          </div>
          <div className="main__bestcoinfuture__table--thread--cell">
            <div className="main__bestcoinfuture__table--thread--cell--item">
              24H 거래량 <BiExpandVertical size={10} className="ml-2" />
            </div>
          </div>
        </div>

        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoinfuture__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            BTC-USD-PERPETUAL
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">26,600</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>-11%</span>
            </div>
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.24백만
          </div>
          <div className="main__bestcoinfuture__table--tbody--cell">
            0.76백만
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFutures;
