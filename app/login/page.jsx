import React from "react";
import Image from "next/image";
import SnsLogin from "@/components/SnsLogin";
import Link from "next/link";
import LoginForm from "@/components/signInUp/LoginForm";

const page = () => {
  return (
    <section className="bg-gray-50 h-full w-full">
      <div className="flex flex-col items-center justify-center px-6 py-4  mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              로그인 하기
            </h1>
            <LoginForm />
            <div className="mt-6">
              <div>
                <div className="relative">
                  <div className="divide-x-2 border"></div>
                  <div className="text-center tracking-tighter font-medium absolute w-full left-0 -top-2 flex justify-center">
                    <div className="bg-white w-fit px-2 text-gray-500">
                      간편 로그인
                    </div>
                  </div>
                </div>
                <SnsLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
