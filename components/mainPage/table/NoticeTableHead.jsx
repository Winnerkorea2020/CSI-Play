import React from "react";

const NoticeTableHead = ({ columns }) => {
  return (
    <div className="main__table--thread">
      {columns.map(({ label, accessor }) => {
        return (
          <div key={accessor} className="main__table--thread--cell">
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default NoticeTableHead;
