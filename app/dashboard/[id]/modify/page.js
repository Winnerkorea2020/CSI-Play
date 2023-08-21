import Link from "next/link";
import TextEditor from "@/components/TextEditor";

const DashBoardCreate = () => {
  return (
    <div className="card mt-2 flex-1">
      <div className="container mt-12 mx-auto md:px-6">
        <h3 className="font-semibold text-xl py-2.5;">수정하기</h3>
        <div className=" bg-white mx-auto max-w-8xl mt-3 border">
          <TextEditor />
        </div>

        <div className="mt-5 flex items-center justify-start gap-2">
          <Link
            href={`/dashboard`}
            className="block text-center rounded-lg px-2 py-2.5 w-32 bg-gray-400 hover:bg-gray-600 text-white border"
          >
            취소
          </Link>
          <Link
            href={`/dashboard/[id]?=1`}
            className="block text-center rounded-lg px-2 py-2.5 w-32 bg-red-400 hover:bg-red-600 text-white border"
          >
            수정
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCreate;
