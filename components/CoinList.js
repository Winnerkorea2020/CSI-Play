import Link from "next/link";
import Image from "next/image";
import { coinNamesImg } from "@/constant";
import SignUpSignIn from "./SignUpSignIn";

const CoinList = () => {
  const isAuthenticated = false;
  return (
    <div className="card">
      <div>
        <div className="grid grid-cols-4 gap-3 tracking-tighter text-gray-600 font-medium">
          {coinNamesImg.map((coin, index) => (
            <Link href="">
              <Image src={coin.img} alt="" width={100} height={100} />
              <div className="w-full text-center text-xs">{coin.title}</div>
            </Link>
          ))}
        </div>
      </div>
      {isAuthenticated ? null : <SignUpSignIn />}
    </div>
  );
};

export default CoinList;
