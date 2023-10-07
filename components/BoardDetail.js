import React from "react";
import BoardReply from "./BoardReply";
import { BiChevronLeft, BiChevronRight, BiLike, BiShare } from "react-icons/bi";

const BoardDetail = () => {
  return (
    <div>
      <div>
        <div className="pb-5">
          <h2 className="py-2 xl:py-4 xl:text-2xl font-medium text-lg tracking-tighter truncate whitespace-nowrap">
            자유게시판 제목입니다.
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 items-center">
            <div className="flex justify-start items-center text-xs ">
              <div className="pr-3 xl:pr-5">
                <span className="tracking-tighter">코인추천뉴스</span>
              </div>
              <div className="px-3 xl:px-5 border-l-2">
                <span className="tracking-tighter mr-1">2023-04-02</span>
                <span className="tracking-tighter ">18:00</span>
              </div>
              <div className="px-3 xl:px-5 border-l-2">
                <span className="tracking-tighter mr-1">댓글</span>
                <span className="tracking-tighter ">2</span>
              </div>
              <div className="px-3 xl:px-5 border-l-2">
                <span className="tracking-tighter mr-1">추천</span>
                <span className="tracking-tighter ">135</span>
              </div>
            </div>
            <div className="flex justify-start xl:justify-end items-center gap-2">
              <button
                type="button"
                className=" py-1.5 px-2 border rounded-full hover:bg-red-500 hover:text-white"
              >
                <div className="flex justify-center items-center gap-1">
                  <BiLike size={15} /> <div>추천하기</div>
                </div>
              </button>
              <button
                type="button"
                className=" py-1.5 px-2 border rounded-full hover:bg-blue-500 hover:text-white"
              >
                <div className="flex justify-center items-center gap-1">
                  <BiShare size={15} /> <div>공유하기</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-4">
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.Where does it come from? Contrary to popular belief, Lorem
              Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </p>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-10 gap-2 items-center">
            <button
              type="button"
              className="text-center py-1.5 px-2 border bg-gray-600 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs w-full  cursor-pointer  text-white"
            >
              <div className="flex justify-center items-center gap-1">
                <BiChevronLeft size={15} /> <div className="pr-2">이전글</div>
              </div>
            </button>
            <button
              type="button"
              className=" py-1.5 px-2 border bg-gray-600 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs w-full  cursor-pointer  text-white"
            >
              <div className="flex justify-center items-center gap-1">
                <div className="pl-2">다음글</div>
                <BiChevronRight size={15} />
              </div>
            </button>
            <button
              type="button"
              className=" py-1.5 px-2 border bg-gray-600 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs w-full  cursor-pointer  text-white"
            >
              <div>목록</div>
            </button>
          </div>
        </div>
        <div className="mt-3 border-t pt-3">
          <BoardReply />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
