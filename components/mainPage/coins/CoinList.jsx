import Link from "next/link";
import Image from "next/image";
import { coinNamesImg } from "@/constant";
import SignUpSignIn from "@/components/signInSignUp/SignUpSignIn";
import Logined from "@/components/signInSignUp/Logined";

const CoinList = () => {
  const isAuthenticated = true;
  return (
    <div className="card">
      <div className="xl:mb-10">
        <div className="grid grid-cols-4 gap-3 tracking-tighter text-gray-600 font-medium">
          {coinNamesImg.map((coin, index) => (
            <Link href="" key={index}>
              <Image src={coin.img} alt="" width={100} height={100} />
              <div className="w-full text-center text-xs">{coin.title}</div>
            </Link>
          ))}
        </div>
      </div>
      {isAuthenticated ? <Logined /> : <SignUpSignIn />}
    </div>
  );
};

export default CoinList;
