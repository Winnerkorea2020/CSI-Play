"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CardHorizonalTypeE = () => {
  const pathname = usePathname();
  const id = "1";
  console.log(pathname);
  return (
    <div>
      <Link
        href={`${pathname}/${id}`}
        className="flex items-center rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 px-4"
      >
        <div className="flex justify-between items-center p-4 leading-normal w-full">
          <h1 className="text-sm tracking-tight text-gray-900 w-full">
            (주)세종메디칼 전환사채(해외전환사채포함)발행후만기전사채취득(제4회차)
          </h1>
          <div className="text-sm tracking-tight text-gray-700 w-36">22.12.29 19:20</div>
          <p className="font-normal text-gray-700 w-56">KOSCOM</p>
        </div>
      </Link>
    </div>
  );
};

export default CardHorizonalTypeE;
