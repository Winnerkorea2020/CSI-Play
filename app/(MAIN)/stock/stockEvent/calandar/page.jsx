import CalandarTypeA from "@/components/calandar/CalandarTypeA";
import TableHeader from "@/components/table/TableHeader";

const page = () => {
  const title = "증시캘린더";
  return (
    <div className="border px-5">
      <TableHeader title={"증시캘린더"} nosearch={false} />

      <div className="grid grid-cols-1 gap-3 w-full border">
        <CalandarTypeA />
      </div>
    </div>
  );
};

export default page;
