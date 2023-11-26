"use client";
import { useRouter } from "next/navigation";

const JoinPage = () => {
  const router = useRouter();

  return (
    <div className=" absolute left-0 bottom-0 h-full bg-white  w-full">
      <div className="h-[598px] flex flex-col justify-center items-center">
        <h3 className="text-4xl tracking-tighter text-center mt-12 b">
          축하합니다.
        </h3>
        <p className="py-2.5 text-lg">회원가입이 완료 되었습니다.</p>
        <div>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="btn btn-blue w-full rounded-lg"
          >
            홈으로 이동하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
