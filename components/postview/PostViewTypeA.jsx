import CommentInput from "../comments/CommentInput";
import Comment from "../comments/Comment";
import PostViewBody from "./PostViewBody";
import PostViewHead from "./PostViewHead";

const PostViewTypeA = ({ postData }) => {
  return (
    <>
      <PostViewHead postHead={postData} />
      <PostViewBody postData={postData} />
      <CommentInput />
      {postData.commentListData.map((item, index) => {
        return <Comment key={index} commentData={item} />;
      })}
    </>
  );
};

export default PostViewTypeA;
