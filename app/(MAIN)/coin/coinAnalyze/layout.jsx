import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <div className="mt-2">
        <div className="flex justify-start items-center gap-0.5 border-b-2 ">
          <Link
            className="border border-gray-200 py-2 px-1 xl:px-5 xl:py-2.5 rounded-t bg-gray-50  text-xs xl:text-sm font-medium hover:bg-yellow-400"
            href={`/coin/coinAnalyze/coin`}
          >
            코인분석
          </Link>
          <Link
            className="border border-gray-200 py-2 px-1 xl:px-5 xl:py-2.5 rounded-t bg-gray-50  text-xs xl:text-sm font-medium hover:bg-yellow-400"
            href={`/coin/coinAnalyze/investReport`}
          >
            시황분석
          </Link>
          <Link
            className="border border-gray-200 py-2 px-1 xl:px-5 xl:py-2.5 rounded-t bg-gray-50  text-xs xl:text-sm font-medium hover:bg-yellow-400"
            href={`/coin/coinAnalyze/chart`}
          >
            차트 관점
          </Link>
          <Link
            className="border border-gray-200 py-2 px-1 xl:px-5 xl:py-2.5 rounded-t bg-gray-50  text-xs xl:text-sm font-medium hover:bg-yellow-400"
            href={`/coin/coinAnalyze/market`}
          >
            암호화폐 투자리포트
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
