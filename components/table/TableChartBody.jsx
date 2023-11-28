"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableChartBody = ({ topics }) => {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 mb-4">
      {topics.map((topics) => (
        <Link
          href={`${pathname}/${topics.id}`}
          key={topics.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img className="w-full" src={`${topics.img}`} alt="Chart News"></img>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{topics.title}</div>
            <p className="text-gray-700 text-base">{topics.contents}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {topics.tag}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {topics.author}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {topics.dateTime}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TableChartBody;
