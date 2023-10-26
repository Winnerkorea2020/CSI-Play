import Image from "next/image";
import Link from "next/link";

const WeekendData = () => {
  return (
    <div>
      <div className="w-full h-full overflow-y-auto overscroll-y-auto scroll">
        <ul className="w-full h-full px-3 mt-5 flex flex-col gap-6 py-8">
          <li className="bg-white">
            <Link href="#none" className="w-full">
              <div className="flex justify-start items-start">
                <div className="w-fit">
                  <Image src="/ico-mcg.svg" alt="" width={50} height={50} />
                </div>

                <div className="w-full ml-3">
                  <p className="text-start font-medium text-xs tracking-tighter">
                    마이크로체인 거버넌스 토큰
                  </p>

                  <div className="text-xs font-medium">MCG/KRW</div>
                </div>
                <div className="w-fit">
                  <div className="font-medium text-red-500 text-base w-full text-end">
                    +15.54%
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeekendData;
