import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-full mx-auto p-0 xl:px-4 md:py-8 ">
        <div className="xl:flex xl:items-start xl:justify-between xl:px-4">
          <div className="basis-1/2 xl:flex xl:justify-start xl:items-start gap-2">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 px-2 pt-3">
              <Image
                src="/ico-abbc.svg"
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
              <div className="footer__title">
                서울특별시 강서구 등촌로53길 7, 2층(등촌동) 주식회사
              </div>
              <div className="footer__title">
                <span className="pr-3  border-r-2 border-gray-300">
                  주식회사 프라임플레이
                </span>
                <span className="px-3  border-r-2 border-gray-300">
                  대표 : 김태윤
                </span>
                <span className="px-3 ">사업자등록번호 : 357-86-00725</span>
              </div>
              <div className="footer__title">
                Copyright
                <Link href="#" className="hover:underline">
                  &copy; CSI-PLAY Pte.Ltd.
                </Link>
                All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <ul className="footer__menu">
              {footerLinks.map((foot, index) => (
                <li key={index}>
                  <Link href={foot.link} className="footer__item">
                    {foot.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
