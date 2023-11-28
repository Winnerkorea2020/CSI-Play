import React from "react";
import Link from "next/link";
import Image from "next/image";

const SnsLogin = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-10">
      <Link href="/">
        <Image src="/ico-kakao.svg" width={60} height={60} />
      </Link>
      <Link href="/">
        <Image src="/ico-naver.svg" width={60} height={60} />
      </Link>

      <Link href="/">
        <Image src="/ico-facebook-symbol.svg" width={60} height={60} />
      </Link>
    </div>
  );
};

export default SnsLogin;
