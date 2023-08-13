import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-2 bg-white">
      <div className="w-full mx-auto p-0 xl:px-4 md:py-8 ">
        <div className="xl:flex xl:items-start xl:justify-between xl:px-4">
          <div className="basis-1/2 xl:flex xl:justify-start xl:items-start gap-2">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 px-2 pt-3">
              <Image
                src="./ico-abbc.svg"
                width={30}
                height={30}
                className="mr-2 xl:ml-0"
                alt="CSI-Play"
              />
              <span className="self-center  xl:text-2xl font-semibold whitespace-nowrap">
                CSI-PLAY
              </span>
            </Link>
            <div className="ml-5">
              <div className="text-sm xl:text-base text-gray-700 font-medium tracking-tighter">
                서울특별시 강서구 등촌로53길 7, 2층(등촌동) 주식회사
              </div>
              <div className="text-sm xl:text-base text-gray-700 font-medium tracking-tighter">
                프라임플레이대표 : 김태윤사업자등록번호 : 357-86-00725
              </div>
            </div>
          </div>
          <div className="basis-1/2 ">
            <ul className="flex flex-col xl:flex-row xl:justify-between xl:items-start px-4 py-5 xl:px-0 xl:pt-0 gap-2 ">
              {footerLinks.map((foot, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className=" text-sm xl:text-base text-gray-700 font-medium tracking-tighter xl:mr-4 hover:underline xl:md:mr-6"
                  >
                    {foot.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-end items-center gap-2 px-4">
            <div>
              <Link href="">
                <Image
                  src="/googleplaystore.png"
                  alt=""
                  width={150}
                  height={120}
                />
              </Link>
            </div>
            <div>
              <Link href="">
                <Image src="/appstore.png" alt="" width={150} height={120} />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 w-full  pr-2 pl-8" />
        <span className="block text-sm text-gray-500 px-4 text-center">
          © 2023{" "}
          <Link href="#" className="hover:underline">
            CSI-Play
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
