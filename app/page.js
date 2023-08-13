import Link from "next/link";
import Image from "next/image";

import Ticker from "@/components/Ticker";
import BestCoin from "@/components/BestCoin";
import SignUpSignIn from "@/components/SignUpSignIn";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="mt-2">
      <Ticker />
      <section className="mt-2 px-6 w-full mx-auto">
        <div className="grid grid-cols-12 gap-2 w-full">
          {/* Left Side Section */}
          <div className="col-span-10"></div>
          {/* Left Side Section */}
          <div className="col-span-2">
            {/* Sign In and Best Coin List */}
            <div className="bg-white rounded-lg hidden xl:block">
              <BestCoin />
              <SignUpSignIn />
              <Banner />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
