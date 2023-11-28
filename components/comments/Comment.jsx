"use client";
import { RiDeleteBin5Line, RiErrorWarningLine } from "react-icons/ri";

const isAuthority = true;
const Comment = ({ commentData }) => {
  return (
    <div className="">
      <div>
        <div className="w-full mt-2 bg-orange-100 p-5">
          <div className="flex justify-between items-center">
            <div className="flex justify-items-start items-center gap-2">
              <div className="py-2 font-semibold">{commentData.write}</div>
              <div className="text-end text-xs tracking-tighter">
                <span className="mr-1">{commentData.date}</span>
              </div>
            </div>
          </div>

          <div>
            <p>{commentData.comments}</p>
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

export default Comment;
