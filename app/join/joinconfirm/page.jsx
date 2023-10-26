import Image from "next/image";

const JoinPage = () => {
  return (
    <div className="h-full">
      {/* Step */}
      <div className="mt-8 mb-16">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-800 sm:text-base">
          <li className="flex md:w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 ">
            <span className="flex items-center w-32">1. 약관동의</span>
          </li>
          <li className="flex md:w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 ">
            <span className="flex items-center w-32">2. 기본정보</span>
          </li>
          <li className="flex md:w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 ">
            <span className="flex items-center w-32">3. 기본정보</span>
          </li>
        </ol>
      </div>
      {/* Button */}
      <div className="flex justify-between items-center gap-3">
        <button className="btn btn-blue w-full rounded-lg">
          홈으로 이동하기
        </button>
      </div>
    </div>
  );
};

export default JoinPage;
