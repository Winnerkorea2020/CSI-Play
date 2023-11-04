"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableAnalyzeBody = ({ topics }) => {
  const pathname = usePathname();
  return (
    <div className="grid xl:grid-cols-1 gap-3 mb-5">
      {topics.map((topics) => (
        <div
          key={topics.id}
          class="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 border shadow-md"
        >
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img
              src={topics.img}
              alt="image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
              {topics.tag}
            </h6>
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {topics.title}
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {topics.contents}
            </p>
            <Link href={`${pathname}/${topics.id}`} class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableAnalyzeBody;
