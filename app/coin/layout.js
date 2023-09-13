import SideNavi from "@/components/SideNavi";

const CoinLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 w-full gap-2">
      <div className="xl:col-span-10">{children}</div>
      <div className="hidden xl:block xl:col-span-2">
        <SideNavi index={0} />
      </div>
    </div>
  );
};

export default CoinLayout;
