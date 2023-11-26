import TextEditor from "@/components/write/TextEditor";
import BoardTableHeader from "@/components/board/BoardTableHeader";
import CardHorizonalTypeD from "@/components/card/CardHorizonalTypeD";
import TableCard from "@/components/table/TableCard";
import TableList from "@/components/table/TableList";
import Link from "next/link";
import React from "react";

export default function page() {
  const title = "시황분석";
  return (
    <div>
      게시판 만들기 연습
      <div>
        <TableCard title={title} />
      </div>
    </div>
  );
}
