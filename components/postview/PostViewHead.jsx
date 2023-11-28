import React from "react";

const PostViewHead = ({ postHead }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-xl tracking-tighter font-medium">
          {postHead.title}
        </h3>
        <div className="flex justify-end items-center "></div>
      </div>
      <div>
        <span className="px-2 xl:px-0 text-xs xl:text-sm">
          작성자 : {postHead.write}
        </span>
        <span className="px-2 xl:px-0 xl:pl-2 text-xs xl:text-sm">
          날짜 : {postHead.data}
        </span>
        <span className="px-2 xl:px-0 xl:pl-2 text-xs xl:text-sm">
          좋아요 : {postHead.like}
        </span>
        <span className="px-2 xl:px-0 xl:pl-2 text-xs xl:text-sm">
          조회수 : {postHead.view}
        </span>
      </div>
    </>
  );
};

export default PostViewHead;
