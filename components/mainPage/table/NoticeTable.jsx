import MainTitle from "@/components/title/MainTitle";
import { noticeColumn, noticeData } from "@/constant/notice";
import NoticeTableBody from "./NoticeTableBody";
import NoticeTableHead from "./NoticeTableHead";

const NoticeTable = () => {
  const title = "공지사항";
  const linkUrl = "/";

  return (
    <div className="card h-full">
      <MainTitle title={title} url={linkUrl} />

      <div className="main__board--card overflow-auto">
        <div className="w-full overscroll-auto ">
          <div className="main__table">
            {/* Head */}

            <NoticeTableHead columns={noticeColumn} />
            {/* Body */}
            <NoticeTableBody columns={noticeColumn} noticeData={noticeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTable;
