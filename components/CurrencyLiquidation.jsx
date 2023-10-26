import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import Image from "next/image";

const CurrencyLiquidation = () => {
  return (
    <div className="card h-full">
      <div className="flex justify-between items-center w-full">
        <div className="basis-1/2">
          <div className="main__box--title ">
            <h2 className="main__title">통화청산</h2>

            <Link className="" href={`/`}>
              <LiaAngleRightSolid size={20} />
            </Link>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex justify-end items-center gap-3">
            <select
              defaultValue="1"
              id="currencylist_1"
              className="w-32 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5"
            >
              <option className="text-center" value="1">
                기간
              </option>
              <option className="" value="ThirtyMINUTE">
                30 Minute
              </option>
              <option className="" value="HOUR">
                1 Hour
              </option>
              <option className="" value="TwoHOUR">
                2 Hours
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="main__board--card">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-3">
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
          <div className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm">
            <div className="inline-flex">
              <Image
                src="./ico-bethumb-lg.svg"
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>0.24M</span>
            </div>
            <div>
              <span>≈</span>
              <span>4,980K</span> <span>BTC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyLiquidation;
