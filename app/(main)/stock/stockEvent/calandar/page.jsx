import CalandarTypeC from "@/components/calandar/CalandarTypeC";
import TableHeader from "@/components/table/TableHeader";

const page = () => {
  const title = "증시캘린더";
  return (
    <div className="border px-5">
      <TableHeader title={"증시캘린더"} nosearch={false} />

      <div className="w-full mb-10">
        <iframe
          width="100%"
          height="700"
          src="./compressed.tracemonkey-pldi-09.pdf"
        ></iframe>
      </div>

      <div className="overflow-x-auto">
        <CalandarTypeC />
      </div>
    </div>
  );
};

export default page;
