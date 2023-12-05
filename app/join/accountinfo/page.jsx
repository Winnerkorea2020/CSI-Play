"use client";

import Button from "@/components/button/Button";
import Checkbox from "@/components/checkbox/Checkbox";
import InputBox from "@/components/inputbox/InputBox";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";

const JoinPage = ({ step1, step2, step3 }) => {
  const [agreeSms, setAgreeSms] = useState(false);
  const [agreeEmail, setagreeEmail] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-full w-full">
      <div className="my-5 px-64 mx-32">
        {/* Step */}

        {/* Form */}
        <div className="grid grid-cols-1 gap-y-3 ">
          <div className="flex justify-between gap-2 items-end">
            <div className="w-full ">
              <InputBox
                label={true}
                title={"ID"}
                type={"text"}
                placeholder={"아이디를 입력하세요."}
                required={true}
              />
            </div>
            <div className="w-40 ">
              <Button
                title={"아이디 중복확인"}
                style={"btn btn-red btn-rounded"}
              />
            </div>
          </div>
          <InputBox
            label={true}
            title={"패스워드"}
            type={"password"}
            placeholder={"패스워드를 입력하세요."}
            required={true}
          />
          <InputBox
            label={true}
            title={"패스워드 확인"}
            type={"password"}
            placeholder={"다시한번 패스워드를 입력하세요."}
            required={true}
          />
          <InputBox
            label={true}
            title={"이름"}
            type={"text"}
            placeholder={"이름을 입력하세요."}
            required={true}
          />
          <InputBox
            label={true}
            title={"이메일 주소"}
            type={"mail"}
            placeholder={"E-Mail"}
            required={true}
          />
          <InputBox
            label={true}
            title={"전화번호"}
            type={"tel"}
            placeholder={"전화번호를 입력하세요."}
            required={true}
          />

          <div className="">
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
            <Checkbox title={"SMS"} checked={agreeSms} onChange={setAgreeSms} />
            <Checkbox
              title={"이메일"}
              checked={agreeEmail}
              onChange={setagreeEmail}
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center  items-center gap-3  mt-10">
          <button className="bg-blue-500 py-2 text-white w-24 rounded-lg">
            취소
          </button>
          <button
            className=" bg-red-500 py-2 text-white w-24 rounded-lg"
            onClick={() => router.push(`/join/joinconfirm`)}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
