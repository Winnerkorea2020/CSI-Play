"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const LoginForm = () => {
  const router = useRouter();

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          ID
        </label>
        <input
          type="text"
          name="text"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 "
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="remember" className="text-gray-500 ">
              아이디 저장
            </label>
          </div>
        </div>
        <Link
          href="#"
          className="text-sm font-medium text-gray-600 hover:underline "
        >
          패스워드 찾기?
        </Link>
      </div>
      <button className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        로그인 하기
      </button>
      <Link
        href="/"
        className="block w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        홈으로 이동하기
      </Link>
      <p className="text-sm font-light text-gray-500 ">
        아직 계정을 가지고 있지 않으신가요?
        <Link
          href="/join/terms"
          className="font-medium text-gray-600 hover:underline "
        >
          회원가입
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
