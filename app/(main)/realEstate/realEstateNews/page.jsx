import CardHorizonalTypeA from "@/components/card/CardHorizonalTypeA";
import Link from "next/link";

const page = () => {
  const title = "부동산 뉴스";
  return (
    <div className="h-full bg-white">
      <div>
        <h3>TODAY 뉴스</h3>
        <div className="grid grid-rows-2 grid-flow-col gap-4 ">
          <div className="col-span-2">
            <h3 className="text-xl tracking-tighter">
              한푼 없이 빌라 280채 ‘화곡동 빌라...
            </h3>
            <p className="py-5 tracking-tighter">
              서울 강서구 화곡동 일대에서 이른바 ‘무자본 갭투기‘로 빌라 280채를
              매수해 30억원이 넘는 보증금을 가로챈 일당들이 구속되면서
              범행수법과 예방법에 대한 관심이 높아지고 있다. 29일 검찰에 따르면
              서울남부지검 전세사기전담수사팀(부장...뉴스1 2022.12.29
            </p>
          </div>

          <div className="col-span-2">
            <h3 className="text-xl tracking-tighter">
              한푼 없이 빌라 280채 ‘화곡동 빌라...
            </h3>
            <p className="py-5 tracking-tighter">
              서울 강서구 화곡동 일대에서 이른바 ‘무자본 갭투기‘로 빌라 280채를
              매수해 30억원이 넘는 보증금을 가로챈 일당들이 구속되면서
              범행수법과 예방법에 대한 관심이 높아지고 있다. 29일 검찰에 따르면
              서울남부지검 전세사기전담수사팀(부장...뉴스1 2022.12.29
            </p>
          </div>
          <div className="row-span-2 col-span-2 px-5 border-l bg-gray-50">
            <h3 className="text-xl tracking-tighter">핫이슈 HOT</h3>
            <div>
              <ul className="py-5">
                <li>“부채 연착륙 필요”…LTV 완...</li>
                <li>서울·경기 4곳만 빼고 풀어 “...</li>
                <li>규제 풀린 지방, 11월 4만 가구...</li>
                <li>"서울 해제여부, 주변지역 효과...</li>
              </ul>
              <Link href="/" className="text-end block py-5">
                관련기사 더보기
              </Link>
            </div>
            <div>
              <h3 className="text-xl tracking-tighter">
                한푼 없이 빌라 280채 ‘화곡동 빌라...
              </h3>
              <div>
                <ul className="py-5">
                  <li>“부채 연착륙 필요”…LTV 완...</li>
                  <li>서울·경기 4곳만 빼고 풀어 “...</li>
                  <li>규제 풀린 지방, 11월 4만 가구...</li>
                  <li>"서울 해제여부, 주변지역 효과...</li>
                </ul>
                <Link href="/" className="text-end block py-5">
                  관련기사 더보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CardHorizonalTypeA />
      </div>
    </div>
  );
};

export default page;
