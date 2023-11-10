import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logined = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-start items-center gap-2 h-full">
        {/* Image Area */}
        <div className="relative h-16 w-16">
          <Link href="/">
            <Image
              src="/ico-w.svg"
              fill
              className="rounded-full border shadow h-full w-full bg-gray-400"
            />
          </Link>
        </div>
        <div className="h-full">
          <div className="flex justify-start items-center">
            {/* Level Area */}
            <div className=" rounded-full flex justify-center items-center h-6 w-6 bg-gray-200 text-gray-500 text-center font-semibold">
              10
            </div>
            {/* ID Area */}
            <div className="font-medium tracking-tighter px-2">ABCEDSD</div>
          </div>
          {/* Write List and Reply Area */}
          <div className="flex flex-col justify-between items-center  w-full h-full">
            <div className="text-gray-500 tracking-tight inline-flex ">
              <div className="mr-2">게시글</div>
              <Link
                href="/"
                className="font-semibold tracking-tighter underline"
              >
                10,000,000
              </Link>
            </div>
            <div className="text-gray-500 tracking-tight inline-flex ">
              <div className="mr-2">Replay</div>
              <Link
                href="/"
                className="font-semibold tracking-tighter underline"
              >
                12,151,581
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/login`}
        className="block text-center mt-5 rounded-lg w-full p-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-none"
      >
        로그인 하러 가기
      </Link>
    </div>
  );
};

export default Logined;
