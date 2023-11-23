"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import Button from "../button/Button";
import Checkbox from "../Checkbox/Checkbox";

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
            <Checkbox disabled={false} checked={false} />
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

      <Button title={"로그인 하기"} style={"btn btn-blue btn-rounded"} />
      <Link href="/" className="btn btn-red btn-rounded">
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
