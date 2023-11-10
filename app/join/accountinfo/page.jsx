"use client";

import JoinStep from "@/components/SignInUp/JoinStep";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const JoinPage = ({ step1, step2, step3 }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-full w-full">
      <div className="px-5 my-5">
        {/* Step */}
        <JoinStep activiy1={false} activiy2={false} />
        {/* Form */}
        <div>
          <div className="mb-3">
            <label htmlFor="email" className="text-sm text-navy-700  font-bold">
              ID
            </label>
            <div className="flex justify-between items-center gap-2 mt-2">
              <input
                type="text"
                id="email"
                placeholder="@horizon.ui"
                className="flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-400"
              />
              <button className="flex h-12 w-28 xl:w-24 items-center justify-center rounded-xl border bg-red-500 text-white p-3 text-sm outline-none border-gray-400 ">
                중복확인
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email2"
              className="text-sm text-navy-700  font-bold"
            >
              패스워드
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="email2"
                placeholder="Password"
                className="flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-400"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email2"
              className="text-sm text-navy-700  font-bold"
            >
              패스워드 확인
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="email2"
                placeholder="Comfirm Password"
                className="flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-400"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email2"
              className="text-sm text-navy-700  font-bold"
            >
              이름
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="email2"
                placeholder="Name"
                className="flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-400"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email2"
              className="text-sm text-navy-700  font-bold"
            >
              이메일 주소
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email2"
                placeholder="email address"
                className="flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-400"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email2"
              className="text-sm text-navy-700  font-bold"
            >
              전화번호
            </label>
            <div className="mt-2">
              <input
                type="tel"
                id="email2"
                placeholder="전화번호"
                className="flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-400"
              />
            </div>
          </div>

          <div className="py-5">
            <ul className=" list-disc px-2">
              <li>
                비밀번호는 8~14자의 영문 대/소문자,숫자,특수문자 등 3종류
                이상으로 조합해주세요.
              </li>
              <li> 성명은 최소 2글자 이상이어야 합니다.</li>
            </ul>
            <div className="mt-2">
              <p className="">이벤트 등 프로모션 알림 SMS 수신 동의 (선택)</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="flex items-center mb-4">
              <input
                defaultChecked
                id="checkbox-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
              />
              <label
                htmlFor="checkbox-1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                SMS
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                defaultChecked
                id="checkbox-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
              />
              <label
                htmlFor="checkbox-1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                이메일
              </label>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-between items-center gap-3">
          <button className="btn btn-red w-full rounded-lg">취소</button>
          <button
            onClick={() => router.push(`/join/joinconfirm`)}
            className="btn btn-blue w-full rounded-lg"
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
