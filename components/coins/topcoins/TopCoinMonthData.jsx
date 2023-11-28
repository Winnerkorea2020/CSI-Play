import Image from "next/image";
import Link from "next/link";
import { CoinMonthTop } from "@/constant";

const TopCoinMonthData = () => {
  return (
    <div className="w-full h-full overflow-y-auto overscroll-y-auto scroll">
      <ul className="w-full h-full px-3 mt-5 flex flex-col gap-6 py-8">
        {CoinMonthTop.map((tenCoins, index) => (
          <li key={index} className="bg-white">
            <Link href="#none" className="w-full">
              <div className="flex justify-start items-start">
                <div className="w-fit">
                  <Image src={`${tenCoins.img}`} alt="" width={50} height={50} />
                </div>

                <div className="w-full ml-3">
                  <p className="text-start font-medium text-sm tracking-tighter">{tenCoins.coinTitle}</p>

                  <div className="text-sm">{`${tenCoins.coinName}/KRW`}</div>
                </div>
                <div className="w-fit">
                  <div className="font-medium text-red-500 text-sm w-full text-end">+15.54%</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCoinMonthData;
