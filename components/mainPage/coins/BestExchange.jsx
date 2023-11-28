import Image from "next/image";
import Link from "next/link";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
const BestExchange = () => {
  return (
    <div className="overflow-auto">
      <div className="main__bestcoin__table">
        {/* Table Header */}
        <div className="main__bestcoin__table--thread">
          <div className="main__bestcoin__table--thread--cell">거래소</div>
          <div className="main__bestcoin__table--thread--cell">24거래량</div>
          <div className="main__bestcoin__table--thread--cell">코인</div>
          <div className="main__bestcoin__table--thread--cell">페어</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretUp size={25} className="text-red-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretUp size={25} className="text-red-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretUp size={25} className="text-red-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>

        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretUp size={25} className="text-red-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretDown size={25} className="text-blue-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-binance-lg.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">바이낸스</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">
            <div className="inline-flex justify-start items-center gap-2">
              <span className="inline-block">5,620,337백만</span>
              <FaCaretUp size={25} className="text-red-500" />
              <span>11</span>
            </div>
          </div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003</div>
        </div>
      </div>
    </div>
  );
};

export default BestExchange;
