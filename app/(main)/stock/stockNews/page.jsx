import StockTab from "@/components/mainPage/stock/StockTab";

const StockNewsPage = () => {
  const title = "주식뉴스";
  return (
    <div className="border px-5">
      <StockTab title={title} />
    </div>
  );
};

export default StockNewsPage;
