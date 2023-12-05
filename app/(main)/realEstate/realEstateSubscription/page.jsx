import RealEstateSearch from "@/components/realestate/RealEstateSearch";
import TableHeader from "@/components/table/TableHeader";

const page = () => {
  return (
    <div>
      <TableHeader title={"부동산 청약뉴스"} />
      <RealEstateSearch />
    </div>
  );
};

export default page;
