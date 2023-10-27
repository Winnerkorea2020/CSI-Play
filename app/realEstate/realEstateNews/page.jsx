import CardHorizonalTypeA from "@/components/card/CardHorizonalTypeA";
import FreeBoardSearchBar from "@/components/searchbox/FreeBoardSearchBar";
import SearchBar from "@/components/searchbox/SearchBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">부동산 뉴스</h3>
        </div>
        <div className="mb-4">
          <SearchBar />
        </div>
        <div className="w-full mb-5 ">
          <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div class="border rounded-lg py-2.5 px-3 row-span-2 ">
              <div>
                <h3 className="text-xl tracking-tighter font-semibold mb-5">
                  한푼 없이 빌라 280채 ‘화곡동 빌라...
                </h3>
                <div>
                  <p>
                    서울 강서구 화곡동 일대에서 이른바 ‘무자본 갭투기‘로 빌라
                    280채를 매수해 30억원이 넘는 보증금을 가로챈 일당들이
                    구속되면서 범행수법과 예방법에 대한 관심이 높아지고 있다.
                    29일 검찰에 따르면 서울남부지검
                    전세사기전담수사팀(부장...뉴스1 2022.12.29
                  </p>
                </div>
              </div>
            </div>
            <div class="border rounded-lg py-2.5 px-3 col-span-2 ">
              <div>
                <h3 className="text-xl tracking-tighter font-semibold mb-5">
                  금리인상·거래절벽·경기침체 ‘삼중고...
                </h3>
                <div>
                  <p>
                    서울 강서구 화곡동 일대에서 이른바 ‘무자본 갭투기‘로 빌라
                    280채를 매수해 30억원이 넘는 보증금을 가로챈 일당들이
                    구속되면서 범행수법과 예방법에 대한 관심이 높아지고 있다.
                    29일 검찰에 따르면 서울남부지검
                    전세사기전담수사팀(부장...뉴스1 2022.12.29
                  </p>
                </div>
              </div>
            </div>
            <div class="border rounded-lg py-2.5 px-3 row-span-1 col-span-2 ">
              <div>
                <h3 className="text-xl tracking-tighter font-semibold mb-5">
                  한푼 없이 빌라 280채 ‘화곡동 빌라...
                </h3>
                <div>
                  <p>
                    서울 강서구 화곡동 일대에서 이른바 ‘무자본 갭투기‘로 빌라
                    280채를 매수해 30억원이 넘는 보증금을 가로챈 일당들이
                    구속되면서 범행수법과 예방법에 대한 관심이 높아지고 있다.
                    29일 검찰에 따르면 서울남부지검
                    전세사기전담수사팀(부장...뉴스1 2022.12.29
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
          <CardHorizonalTypeA title={"헤럴드 경제"} />
        </div>
      </div>
    </div>
  );
};

export default page;
