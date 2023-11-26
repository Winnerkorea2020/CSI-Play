import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserBoardLevel from "./UserBoardLevel";

const Logined = () => {
  return (
    <div className="mt-5">
      <UserBoardLevel />
      <Link
        href={`/login`}
        className="block text-center mt-5 rounded-lg w-full p-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-none"
      >
        로그인
      </Link>
    </div>
  );
};

export default Logined;
