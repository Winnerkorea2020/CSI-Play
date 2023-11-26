import CalandarTypeA from "@/components/calandar/CalandarTypeA";

const page = () => {
  return (
    <div>
      <div className="p-4">
        <div className="tracking-tighter text-xl font-semibold">출석체크</div>
      </div>
      <CalandarTypeA />
    </div>
  );
};

export default page;
