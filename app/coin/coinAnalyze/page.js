import FreeBoardSearchBar from "@/components/FreeBoardSearchBar";
import Link from "next/link";

const CoinAnalyzePage = () => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <h6 className="py-4 font-semibold underline text-lg">Title</h6>
      <div className="mb-4">
        <FreeBoardSearchBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="w-full border rounded-lg p-4 shadow">
          <Link href={`/`} className="cursor-pointer">
            <h3 className="text-base font-medium tracking-tighter">Title</h3>
            <div className="h-72 relative"></div>
            <p className="whitespace-nowrap truncate">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </p>
          </Link>
        </div>
        <div className="w-full border rounded-lg p-4 shadow">
          <Link href={`/`} className="cursor-pointer">
            <h3 className="text-base font-medium tracking-tighter">Title</h3>
            <div className="h-72 relative"></div>
            <p className="whitespace-nowrap truncate">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </p>
          </Link>
        </div>
        <div className="w-full border rounded-lg p-4 shadow">
          <Link href={`/`} className="cursor-pointer">
            <h3 className="text-base font-medium tracking-tighter">Title</h3>
            <div className="h-72 relative"></div>
            <p className="whitespace-nowrap truncate">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </p>
          </Link>
        </div>
        <div className="w-full border rounded-lg p-4 shadow">
          <Link href={`/`} className="cursor-pointer">
            <h3 className="text-base font-medium tracking-tighter">Title</h3>
            <div className="h-72 relative"></div>
            <p className="whitespace-nowrap truncate">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </p>
          </Link>
        </div>
        <div className="w-full border rounded-lg p-4 shadow">
          <Link href={`/`} className="cursor-pointer">
            <h3 className="text-base font-medium tracking-tighter">Title</h3>
            <div className="h-72 relative"></div>
            <p className="whitespace-nowrap truncate">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </p>
          </Link>
        </div>
        <div className="w-full border rounded-lg p-4 shadow">
          <Link href={`/`} className="cursor-pointer">
            <h3 className="text-base font-medium tracking-tighter">Title</h3>
            <div className="h-72 relative"></div>
            <p className="whitespace-nowrap truncate">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoinAnalyzePage;
