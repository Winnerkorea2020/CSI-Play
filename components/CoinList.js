import Link from "next/link";
import Image from "next/image";
import { coinNamesImg } from "@/constant";

const CoinList = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-3 tracking-tighter text-gray-600 font-medium">
        {coinNamesImg.map((coin, index) => (
          <Link href="">
            <Image src={coin.img} alt="" width={100} height={100} />
            <div className="w-full text-center">{coin.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoinList;
