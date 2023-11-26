"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Inputbox from "../Inputbox/Inputbox";

const LoginForm = () => {
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <Inputbox
        label={true}
        title={"ID"}
        type={"text"}
        placeholder={"E-Mail"}
        required={true}
      />
      <Inputbox
        label={true}
        title={"패스워드"}
        type={"password"}
        placeholder={"***************"}
        required={true}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Checkbox
              title={"아이디 저장"}
              checked={checkbox}
              onChange={setCheckbox}
            />
          </div>
        </div>
        <Link
          href="#"
          className="text-sm font-medium text-gray-600 hover:underline "
        >
          패스워드 찾기?
        </Link>
      </div>

      <Button
        title={"로그인 하기"}
        style={"btn btn-blue btn-rounded"}
        onChange={setCheckbox}
      />
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
