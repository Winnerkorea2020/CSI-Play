import Link from "next/link";
import SnsLogin from "./SnsLogin";

const SignUpSignIn = () => {
  return (
    <div className="card">
      <div className="flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full">
          <Link
            href="/login"
            className="w-full block text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
          >
            로그인
          </Link>
          <div className="mt-2 w-full text-center">
            <p className="text-sm font-light text-gray-500">
              비밀번호를 잊어버리셨나요?
              <Link
                href="/"
                className="inline-block font-medium text-red-600 tracking-tighter hover:underline"
              >
                비밀번호 찾기
              </Link>
            </p>
          </div>
          <div className="mt-2 w-full text-center">
            <p className="text-sm font-light text-gray-500">
              계정을 가지고 있지 않으신가요?
              <Link
                href="/join"
                className="inline-block font-medium text-red-600 tracking-tighter hover:underline"
              >
                회원가입 하기
              </Link>
            </p>
          </div>
        </div>

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
  );
};

export default SignUpSignIn;
