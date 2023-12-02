import CalandarTypeC from "@/components/calandar/CalandarTypeC";
import TableHeader from "@/components/table/TableHeader";

const page = () => {
  const title = "증시캘린더";
  return (
    <div className="border px-5">
      <TableHeader title={"증시캘린더"} nosearch={false} />

      <div className="relative overflow-x-auto">
        <CalandarTypeC />
      </div>
    </div>
  );
};

export default page;
