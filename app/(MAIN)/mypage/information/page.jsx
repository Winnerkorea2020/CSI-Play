import TableHeader from "@/components/table/TableHeader";
import Mypage from "@/components/userpage/Mypage";
import SocialAccount from "@/components/userpage/SocialAccount";

const page = () => {
  const title = "개인정보설정하기";
  return (
    <div className="px-5 bg-white">
      <TableHeader title={title} nosearch={false} />

      <div className="grid grid-cols-1 xl:grid-cols-2">
        <Mypage />

        <div className="my-4">
          <SocialAccount />
        </div>
      </div>
    </div>
  );
};

export default page;
