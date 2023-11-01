"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { alaramSetting } from "@/mockupDB";

const TableMainBody = () => {
  const pathnamne = usePathname();
  const id = "1";
  console.log(pathnamne);
  return (
    <tbody>
      {alaramSetting.map((table) => (
        <tr key={table.id}>
          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap w-full ">
            {table.number}
          </td>
          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-left cursor-pointer">
            <Link href={`${pathnamne}/${id}`}>{table.title}</Link>
          </td>
          <td scope="row" className="px-4 py-3 truncate whitespace-nowrap text-center">
            {table.write}
          </td>
          <td scope="row" className="hidden xl:block px-4 py-3 truncate whitespace-nowrap text-center">
            {table.date}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableMainBody;
