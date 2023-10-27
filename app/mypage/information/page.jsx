import MarketingAgreed from "@/components/userpage/MarketingAgreed";
import Mypage from "@/components/userpage/Mypage";
import SocialAccount from "@/components/userpage/SocialAccount";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          개인정보설정하기
        </h2>
      </div>
      <div className="grid xl:grid-cols-2 gap-5">
        <Mypage />
        <SocialAccount />
        <div className=" col-span-2">
          <MarketingAgreed />
        </div>
      </div>
    </div>
  );
};

export default page;
