import React from "react";

const TableSideWarnning = () => {
  const modify = false;

  return (
    <div>
      <div className="mt-2 border border-[#ccc] px-5 h-full">
        <div className="my-5 flex flex-col gap-2">
          <button className="py-3 text-center w-full btn bg-orange-400 text-white btn-rounded">
            {!modify ? "등록" : "수정"}
          </button>
        </div>
        <div className="py-5  border-t ">
          <div className="bg-gray-300 py-2 px-5 text-center rounded shadow">
            <h3 className="text-base tracking-tighter font-medium">
              게시물 작성 가이드
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            <div>
              <h3>게시물 작성 조건</h3>
              <ul className="px-5 list-disc py-5">
                <li className="py-1.5 text-sm">
                  코인 커뮤니티로써, 자유게시판을 제외 하고는 코인 및 블록체인
                  관련 내용만 게시물 작성이 가능합니다.
                </li>
              </ul>
            </div>
            <div>
              <h3>게시물의 이동 및 삭제 기준</h3>
              <ul className="px-5 list-disc py-5">
                <li className="py-1.5 text-sm">
                  지나치게 선정적, 폭력적이거나 불법적인 내용의 게시물은 바로
                  삭제됩니다.
                </li>
                <li className="py-1.5 text-sm">
                  분란을 조장하거나 허위사실 유포 또는 회원들을 선동하는 행위와
                  관련된 게시물 은 바로 삭제됩니다.
                </li>
                <li className="py-1.5 text-sm">
                  특정 유저를 지목하거나 저격성 게시물은 바로 삭제됩니다.
                </li>
                <li className="py-1.5 text-sm">
                  거래소 또는 프로젝트 홍보 게시물이나 레퍼럴을 포함한 게시물
                  작성 시 삭제 및 이용이 제한됩니다. <br />
                  (이용 제한은 커뮤니티 이용규칙에 따라 적용됩니다.)
                </li>
                <li className="py-1.5 text-sm">
                  코인 커뮤니티로써, 자유게시판을 제외 하고는 코인 및 블록체인
                  관련 내용만 게시물 작성이 가능합니다.
                </li>
              </ul>
            </div>
            <div>
              <h3>기타 사항</h3>
              <ul className="px-5 list-disc py-5">
                <li className="py-2 text-sm">
                  그 외 게시판 이용에 관련된 사항은 커뮤 니티 이용 규칙을
                  따릅니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-col gap-2 border-t">
          <button
            className={`py-3 text-center w-full btn ${
              !modify ? "bg-gray-900" : "bg-red-500"
            } text-white btn-rounded`}
          >
            {!modify ? "취소" : "삭제"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableSideWarnning;
