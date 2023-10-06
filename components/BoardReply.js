"use client";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiDeleteBin5Line, RiErrorWarningLine } from "react-icons/ri";

const isAuthority = false;
const BoardReply = () => {
  return (
    <div className="">
      <div className="flex justify-start items-center gap-1">
        <div>
          <IoPersonCircleSharp size={30} className="text-gray-500" />
        </div>
        <div>ID:</div>
      </div>
      <form className="w-full mt-5" method="POST">
        <textarea
          name="reply"
          rows={`3`}
          className="border w-full resize-none px-2 py-2.5 rounded-lg"
          placeholder="댓글을 입력하세요."
        ></textarea>
        <div className="mt-3 flex justify-end items-center gap-1 w-full">
          {isAuthority ? (
            <input
              type="submit"
              name="button"
              className="py-1.5 px-2.5 border bg-yellow-500 hover:bg-yellow-600 rounded-xl  tracking-tighter text-xs w-20 cursor-pointer shadow text-white"
              value="등록하기"
            />
          ) : null}
        </div>
      </form>

      <div>
        <div className="w-full mt-2 bg-orange-100 p-5">
          <div className="flex justify-between items-center">
            <div className="flex justify-items-start items-center gap-2">
              <div className="py-2 font-semibold">작성자</div>
              <div className="text-end text-xs tracking-tighter">
                <span className="mr-1">2022-09-22</span>
                <span className="">22:00:00</span>
              </div>
            </div>
          </div>

          <div>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
          </div>

          <div className="flex justify-end items-center gap-1 mt-5 ">
            {isAuthority ? (
              <button className="inline-flex justify-center w-24 text-center py-1 hover:bg-blue-700 tracking-tighter text-white items-center justify-self-start gap-1 text-xs cursor-pointer bg-blue-500 rounded-full">
                <RiDeleteBin5Line size={15} />
                <span>삭제하기</span>
              </button>
            ) : null}
            <button className="inline-flex justify-center w-24 text-center py-1 hover:bg-red-700 tracking-tighter text-white items-center justify-self-start gap-1 text-xs cursor-pointer bg-red-500 rounded-full">
              <RiErrorWarningLine size={15} />
              <span>신고하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardReply;
