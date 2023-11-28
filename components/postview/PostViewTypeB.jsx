"use client";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight, BiLike, BiShare } from "react-icons/bi";

const PostViewTypeB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="border px-5 pb-5">
        <div className="pb-5">
          <h2 className="py-2 font-medium text-lg tracking-tighter truncate whitespace-normal">
            제목입니다.
          </h2>
          <div className="">
            <div className="flex justify-start items-center gap-2">
              <div className="">
                <span className="">IDFIREFIRE</span>
              </div>
              <div className="">
                <span className="">2023-04-02</span>
                <span className="">18:00</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex justify-start items-center gap-2">
                <div className="text-xs">
                  <span className="text-xs lg:text-sm xl:text-base xl:font-medium">
                    댓글
                  </span>
                  <span className="text-xs lg:text-sm xl:text-base xl:font-medium">
                    2
                  </span>
                </div>
                <div className="text-xs">
                  <span className="text-xs lg:text-sm xl:text-base xl:font-medium">
                    추천
                  </span>
                  <span className="text-xs lg:text-sm xl:text-base xl:font-medium">
                    135
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <button
                  type="button"
                  className="px-2 rounded-full xl:px-5 hover:text-white hover:bg-yellow-500"
                >
                  <div className="flex justify-center items-center gap-1">
                    <BiLike size={15} /> <div>추천하기</div>
                  </div>
                </button>
                <button
                  onClick={openModal}
                  type="button"
                  className="px-2 rounded-full xl:px-5 hover:text-white hover:bg-yellow-500"
                >
                  <div className="flex justify-center items-center gap-1">
                    <BiShare size={15} /> <div>공유하기</div>
                  </div>
                </button>
                <ShareModal isOpen={isModalOpen} closeModal={closeModal} />
              </div>
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
              Rackham.
            </p>
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-start xl:justify-between items-center gap-2">
            <div className="flex justify-start items-center gap-2">
              <button
                type="button"
                className=" w-24 text-center py-1.5 px-2 border bg-gray-600 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs  cursor-pointer  text-white"
              >
                <div className="flex justify-center items-center gap-1">
                  <BiChevronLeft size={15} /> <div className="pr-2">이전글</div>
                </div>
              </button>
              <button
                type="button"
                className="  w-24 py-1.5 px-2 border bg-gray-600 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs  cursor-pointer  text-white"
              >
                <div className="flex justify-center items-center gap-1">
                  <div className="pl-2">다음글</div>
                  <BiChevronRight size={15} />
                </div>
              </button>
            </div>
            <div>
              <button
                type="button"
                className=" w-24  py-1.5 px-2 border bg-gray-600 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs  cursor-pointer  text-white"
              >
                <div>목록</div>
              </button>
            </div>
          </div>
        </div>
        <WarningMessage />
        <div className="mt-3 border-t pt-3"></div>
      </div>
    </div>
  );
};

export default PostViewTypeB;
