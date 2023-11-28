import PostViewTypeA from "@/components/postview/PostViewTypeA";
import { postData } from "@/constant/post";

const page = () => {
  const post = postData[0];

  return <PostViewTypeA postData={post} />;
};

export default page;
