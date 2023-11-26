import TableCard from "@/components/table/TableCard";

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
