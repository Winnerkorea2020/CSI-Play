import Image from "next/image";
import Link from "next/link";

const BestCoint = () => {
  return (
    <div className="overflow-auto">
      <div className="main__bestcoin__table">
        {/* Table Header */}
        <div className="main__bestcoin__table--thread">
          <div className="main__bestcoin__table--thread--cell">
            코인/거래금액
          </div>
          <div className="main__bestcoin__table--thread--cell">거래금액</div>
          <div className="main__bestcoin__table--thread--cell">시세(KRW)</div>
          <div className="main__bestcoin__table--thread--cell">
            24시간 변동율
          </div>
        </div>
        {/* 코인정보 */}
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
        <div className="table-row">
          <div className="main__bestcoin__table--tbody--cell ">
            <Image
              className=" inline-block"
              src="/ico-abbc.svg"
              width={30}
              height={30}
            />
            <span className="ml-1 text-base font-medium">ABBC</span>
            <span className="ml-1">abc/KRW</span>
          </div>
          <div className="main__bestcoin__table--tbody--cell">8조 3,686억</div>
          <div className="main__bestcoin__table--tbody--cell">38,452,000</div>
          <div className="main__bestcoin__table--tbody--cell">-0.003 %</div>
        </div>
      </div>
    </div>
  );
};

export default BestCoint;
