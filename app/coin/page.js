import SideNavi from "@/components/SideNavi";
import { navLinks } from "@/constant";
import Table from "@/components/Table";

const SideNavLinks = navLinks;

const page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 w-full gap-2">
      <div className="xl:col-span-10 ">
        <Table />
      </div>
      <div className="xl:col-span-2">
        <SideNavi index={0} />
      </div>
    </div>
  );
};

export default page;
