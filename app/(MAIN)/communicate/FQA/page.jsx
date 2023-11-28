import CardHorizonalTypeD from "@/components/card/CardHorizonalTypeD";
import FreeBoardSearchBar from "@/components/search/FreeBoardSearchBar";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="w-full flex justify-between items-center">
          <h3 className="ml-2 py-4 font-semibold text-lg">FQA</h3>
        </div>
        <div className="mb-4">
          <FreeBoardSearchBar />
        </div>
        <div>
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
          <CardHorizonalTypeD />
        </div>
      </div>
    </div>
  );
};

export default page;
