import Image from "next/image";

const KpremiumCalculator = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-11 items-center mt-5 tracking-tighter">
      <div className="w-full xl:col-span-3 rounded-lg border border-gray-300 shadow shadow-gray-200 px-3 py-2.5">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <Image src="./ico-upbit.svg" alt="" width={25} height={25} />
              <span className="font-medium text-base">업비트</span>
            </div>
            <span className="block text-sm font-medium">22,389,123 원</span>
          </div>
          <div className="w-full text-end">
            <p className="">17,516,08 $</p>
          </div>
        </div>
      </div>

      <div className="xl:col-span-1 1 w-full text-center">
        <span className="text-3xl text-center">-</span>
      </div>

      <div className="w-full xl:col-span-3 rounded-lg border border-gray-300 shadow shadow-gray-200 px-3 py-2.5">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <img src="./ico-binance.svg" alt="" />
              <span className="font-medium text-base">바이낸스</span>
            </div>
            <span className="block text-sm font-medium">22,389,123 원</span>
          </div>
        </div>
        <div className="w-full text-end">
          <p className="">17,516,08 $</p>
        </div>
      </div>

      <div className="xl:col-span-1 1 w-full text-center">
        <span className="text-3xl text-center">=</span>
      </div>

      <div className="w-full xl:col-span-3 rounded-lg border border-red-300 shadow shadow-gray-200 px-3 py-2.5">
        <div className="flex justify-end items-center">
          <div className="flex justify-between items-center gap-3">
            <div className="font-bold text-red-500">김치프리미엄</div>
            <div className="text-blue-500 font-semibold">+2.18 %</div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-end font-bold text-xl">+ 476,785</p>
        </div>
      </div>
    </div>
  );
};

export default KpremiumCalculator;
