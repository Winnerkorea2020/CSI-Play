import React from "react";

const NoticeTableBody = ({ noticeData }) => {
  return (
    <>
      {noticeData.map((noticeData) => {
        return (
          <div key={noticeData.id} className="main__table--tbody">
            <div className="main__table--tbody--cell  w-20">
              {noticeData.tag}
            </div>
            <div className="main__table--tbody--cell text-left ">
              {noticeData.title}
            </div>
            <div className="main__table--tbody--cell text-center w-16">
              {noticeData.rocommand}
            </div>
            <div className="main__table--tbody--cell text-center w-16">
              {noticeData.views}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NoticeTableBody;
