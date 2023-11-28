"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram, SiNaver, SiTwitter } from "react-icons/si";
import TableHeader from "../table/TableHeader";

const SocialAccount = () => {
  const [connected, setConnected] = useState();
  return (
    <div className="">
      <div>
        <TableHeader title={"Social Accounts"} />
      </div>

      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white border bg-[#1877F2] w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-base font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <button className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </button>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white border bg-[#05d686] w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <SiNaver size={20} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-base font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <button className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </button>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="relative text-black/80  border bg-[#FEE500] w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <Image src={`/kakaotalk_sharing_btn_medium.png`} fill />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-base font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <button className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </button>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white border instagram w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <SiInstagram size={20} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-base font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <button className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </button>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-[#1DA1F2] border bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <SiTwitter size={20} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-base font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <button className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
