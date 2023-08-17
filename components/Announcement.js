import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white rounded-lg px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 h-full">
      <div className="">
        <div className="flex justify-between items-center w-full">
          <div className="basis-1/2">
            <h4 className="text-xl py-2.5 font-bold text-black">공지사항</h4>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <colgroup>
              <col width="20%" />
              <col width="60%" />
              <col width="20%" />
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap"></th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  제목
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 font-thin whitespace-nowrap">
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-orange-500 font-semibold rounded-sm w-fit">
                    블록체인
                  </span>
                </th>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <p className="font-thin truncate break-all w-96">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam illo dolores excepturi iure! Aperiam itaque, illo vel
                    adipisci autem veritatis saepe non optio, distinctio alias,
                    placeat deserunt. Iste, minima deserunt?
                  </p>
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <span>2022-01-01</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 font-thin whitespace-nowrap">
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-orange-500 font-semibold rounded-sm w-fit">
                    PPT
                  </span>
                </th>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <p className="font-thin truncate break-all w-96">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam illo dolores excepturi iure! Aperiam itaque, illo vel
                    adipisci autem veritatis saepe non optio, distinctio alias,
                    placeat deserunt. Iste, minima deserunt?
                  </p>
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <span>2022-01-01</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 font-thin whitespace-nowrap">
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-orange-500 font-semibold rounded-sm w-fit">
                    매크로
                  </span>
                </th>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <p className="font-thin truncate break-all w-96">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam illo dolores excepturi iure! Aperiam itaque, illo vel
                    adipisci autem veritatis saepe non optio, distinctio alias,
                    placeat deserunt. Iste, minima deserunt?
                  </p>
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <span>2022-01-01</span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 font-thin whitespace-nowrap">
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-orange-500 font-semibold rounded-sm w-fit">
                    정기간행물
                  </span>
                </th>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <p className="font-thin truncate break-all w-96">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam illo dolores excepturi iure! Aperiam itaque, illo vel
                    adipisci autem veritatis saepe non optio, distinctio alias,
                    placeat deserunt. Iste, minima deserunt?
                  </p>
                </td>
                <td className="px-6 py-4 font-thin whitespace-nowrap">
                  <span>2022-01-01</span>
                </td>
              </tr>
              <tr className="bg-white border-b truncate">
                <th className="px-6 py-4 font-thin whitespace-nowrap">
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-orange-500 font-semibold rounded-sm w-fit">
                    중심추진과제
                  </span>
                </th>
                <td className="px-6 py-4">
                  <p className="font-thin truncate break-all w-96">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam illo dolores excepturi iure! Aperiam itaque, illo vel
                    adipisci autem veritatis saepe non optio, distinctio alias,
                    placeat deserunt. Iste, minima deserunt?
                  </p>
                </td>
                <td className="px-6 py-4 font-thin">
                  <span>2022-01-01</span>
                </td>
              </tr>
              <tr className="bg-white border-b truncate">
                <th className="px-6 py-4 font-thin whitespace-nowrap">
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-orange-500 font-semibold rounded-sm w-fit">
                    중심추진과제
                  </span>
                </th>
                <td className="px-6 py-4">
                  <p className="font-thin truncate break-all w-96">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam illo dolores excepturi iure! Aperiam itaque, illo vel
                    adipisci autem veritatis saepe non optio, distinctio alias,
                    placeat deserunt. Iste, minima deserunt?
                  </p>
                </td>
                <td className="px-6 py-4 font-thin">
                  <span>2022-01-01</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
