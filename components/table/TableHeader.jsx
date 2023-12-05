import React from "react";
import SearchBoxTypeA from "../search/SearchBoxTypeA";
import Link from "next/link";

const TableHeader = ({ title, nosearch, link }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-2.5">
      <h3 className="table__title">{title}</h3>
      {nosearch ? <SearchBoxTypeA /> : null}
      {link ? (
        <Link
          href="https://seibro.or.kr/websquare/control.jsp?w2xPath=/IPORTAL/user/company/BIP_CNTS01020V.xml&menuNo=273"
          className=" cursor-pointer"
        >
          더보기
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default TableHeader;
