import BoardDetail from "@/components/board/BoardDetail";

const page = () => {
  const title = "알람게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;