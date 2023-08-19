import Link from "next/link";
import Image from "next/image";

const SignUpSignIn = () => {
  return (
    <div className="card">
      <div className="flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full">
          <button
            type="submit"
            className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
          >
            로그인
          </button>
          <div className="mt-2 w-full text-center">
            <p className="text-sm font-light text-gray-500">
              비밀번호를 잊어버리셨나요?
              <Link
                href="#"
                className="font-medium text-red-600 tracking-tighter hover:underline"
              >
                비밀번호 찾기
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="divide-x-2 border"></div>
            <div className="text-center tracking-tighter font-medium absolute w-full left-0 -top-2 flex justify-center">
              <div className="bg-white w-fit px-2 text-gray-500">
                간편 로그인
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-10">
            <Link href="/">
              <Image src="/ico-kakao.svg" width={60} height={60} />
            </Link>
            <Link href="/">
              <Image src="/ico-naver.svg" width={60} height={60} />
            </Link>
            <Link href="/">
              <Image src="/ico-google.svg" width={60} height={60} />
            </Link>
            <Link href="/">
              <Image src="/ico-facebook-symbol.svg" width={60} height={60} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSignIn;
