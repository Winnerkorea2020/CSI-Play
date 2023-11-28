"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TableCardBody({ topics }) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 gap-y-4 ">
      {topics.map((topics) => (
        <div
          key={topics.id}
          className="flex border bg-white rounded-lg shadow-sm shadow-gray-100"
        >
          <Link href={`${pathname}/${topics.id}`}>
            <div className="pt-2.5 px-5">
              {/* Header */}
              <div className="text-xs xl:text-sm grid grid-cols-2 xl:grid-cols-5 xl:gap-3 gap-y-1">
                <div className="px-2 border rounded-lg bg-red-500 w-12 text-white text-center text-xs">
                  {topics.tag}
                </div>
                <div className="tracking-tighter">{`작성자: ${topics.author}`}</div>
                <div className="tracking-tighter">{`추천: ${topics.recommand}`}</div>
                <div className="tracking-tighter">{`조회수: ${topics.watch}`}</div>
                <div className="tracking-tighter">{topics.dateTime}</div>
              </div>
              {/* Body */}
              <div className="pb-3">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 leading-none py-2.5">
                  {topics.title}
                </h5>
                <p className="font-normal text-gray-700">{topics.contents}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
