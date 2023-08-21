import React from "react";
import Image from "next/image";
import SignUpSignIn from "@/components/SignUpSignIn";

const page = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <section class="bg-gray-50 h-full w-full">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <Image
              class="mr-2"
              src="ico-abbc.svg"
              alt="logo"
              width={50}
              height={50}
            />
            Flowbite
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                로그인 하기
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    ID
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 "
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500 ">
                        아이디 저장
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-600 hover:underline "
                  >
                    패스워드 찾기?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 ">
                  아직 계정을 가지고 있지 않으신가요?
                  <a
                    href="#"
                    class="font-medium text-gray-600 hover:underline "
                  >
                    회원가입
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
