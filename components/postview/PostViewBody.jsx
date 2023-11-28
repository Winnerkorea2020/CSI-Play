import React from "react";

const PostViewBody = ({ postData }) => {
  return (
    <div className="">
      <p className="text-sm py-3">{postData.post}</p>
    </div>
  );
};

export default PostViewBody;
