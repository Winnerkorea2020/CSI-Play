import { navLinks } from "@/constant";
import Link from "next/link";

const SideNavi = ({ index }) => {
  const SideLink = navLinks[index];

  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <h6 className="py-4 font-semibold  text-lg">{SideLink.category}</h6>

      <ul className="flex flex-col gap-3 list-none px-2">
        {SideLink.items.map((title, index) => (
          <li key={index} className="text-sm">
            <Link href={`../${title.url}`}>{title.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavi;
