import Link from "next/link";
import {
  LiaSearchSolid,
  LiaAngleLeftSolid,
  LiaAngleRightSolid,
} from "react-icons/lia";

const Dashboard = () => {
  return (
    <section className="card__board mt-2">
      <div className="container mt-12 mx-auto md:px-6">
        <div className="flex justify-between items-center">
          <div className="main__box--title ">
            <h2 className="main__title">자유게시판</h2>
          </div>
        </div>
        <div className="mx-auto px-4 ">
          <div className="bg-white relative ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                {/* Search Menu */}
                <form className="flex justify-start items-center gap-2">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <LiaSearchSolid size={20} />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                      placeholder="Search"
                    />
                  </div>
                  <button className="bg-red-600 text-white w-20 py-2.5 rounded-lg cursor-pointer hover:bg-red-500">
                    검색
                  </button>
                </form>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 truncate whitespace-nowrap w-24 text-center"
                    >
                      번호
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 truncate whitespace-nowrap w-auto"
                    >
                      제목
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 truncate whitespace-nowrap w-24 text-center"
                    >
                      작성자
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 truncate whitespace-nowrap w-24 text-center"
                    >
                      등록일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      공지사항
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      공지사항
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      공지사항
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      공지사항
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      공지사항
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      30
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      29
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      28
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      27
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      26
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      25
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      24
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      23
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      22
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      21
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      20
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      19
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      18
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      17
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      16
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      15
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      14
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      13
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      12
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      11
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      10
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      9
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      8
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      7
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      6
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      5
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      4
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      3
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                  <tr className="border-b ">
                    <th
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      1
                    </th>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-left"
                    >
                      TEST
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      관리자
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-3 truncate whitespace-nowrap text-center"
                    >
                      2023-08-24
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
              <ul className="inline-flex items-stretch">
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >
                    <LiaAngleLeftSolid size={15} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >
                    1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >
                    2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  table__activity "
                  >
                    3
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >
                    4
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >
                    5
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
                  >
                    <LiaAngleRightSolid size={15} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
