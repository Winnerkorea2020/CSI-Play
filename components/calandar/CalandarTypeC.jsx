import React from "react";
import TableHeader from "../table/TableHeader";
import { Span } from "next/dist/trace";

const CalandarTypeC = () => {
  const dateValue = new Date();
  const dateMonth = dateValue.getMonth() + 1;
  return (
    <div>
      <div>
        <TableHeader title={"공지일정"} link={true} />
      </div>

      <table className="table-auto w-full mb-5">
        <colgroup>
          <col width="5%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
        </colgroup>
        <thead>
          <tr className="bg-gray-50">
            <th className="border py-2" colSpan={6}>
              {`${dateMonth}월`}
            </th>
          </tr>
          <tr className="bg-gray-50">
            <th className="border py-2"></th>
            <th className="border py-2">11/27(월)</th>
            <th className="border py-2">11/28(화)</th>
            <th className="border py-2">11/29(수)</th>
            <th className="border py-2">11/30(목)</th>
            <th className="border py-2">12/01(금)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
          <tr className="border">
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis"></td>
            <td className="px-2 py-1 border text-ellipsis ">
              미래에셋맵스제1호위탁관리부동산투자회사
            </td>
            <td className="px-2 py-1 border text-ellipsis"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalandarTypeC;
