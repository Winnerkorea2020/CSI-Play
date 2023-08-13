import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant";

const Nav = () => {
  return (
    <>
      <header className="bg-white fixed top-0 left-0 w-full mx-auto px-2 xl:px-4 z-50 h-20">
        <div className="flex justify-between items-center gap-2 w-full h-20">
          {/* Navigation Link And Menu Bar */}
          {/* Logo Icons */}
          <div className=" flex justify-between items-center basis-1/2 xl:justify-start">
            <Link
              href="/"
              className="inline-flex justify-start items-center gap-3"
            >
              <Image src="/ico-abbc.svg" width={30} height={30} />
              <span className=" inline-block text-sm font-semibold w-24">
                CSI-Play
              </span>
            </Link>

            <ul className="absolute hidden top-0 left-0 px-5 py-6 bg-white z-50 w-full h-screen xl:static xl:bg-inherit xl:flex  xl:h-auto xl:px-0">
              {navLinks.map((category, index) => (
                <li
                  key={index}
                  className="group inline-block relative w-full mb-2 px-2 xl:w-auto  xl:mb-0 xl:px-2"
                >
                  <button className=" w-full inline-flex justify-between items-center font-semibold hover:text-gray-400 xl:justify-center">
                    <span className="mr-1">{category.category}</span>
                    <svg
                      className="xl:static fill-current h-4 w-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="xl:absolute w-full hidden text-gray-700 pt-1 group-hover:block xl:group-hover:border xl:group-hover:shadow-gray-200 xl:group-hover:shadow xl:group-hover:rounded-xl xl:w-40">
                    {category.items.map((item, subindex) => (
                      <li key={subindex} className="bg-white">
                        <Link
                          className="hover:text-yellow-500 hover:font-semibold py-1.5 xl:py-2 xl:pl-2 xl:pr-4 inline-flex items-center whitespace-no-wrap"
                          href="#"
                        >
                          <div className="mr-1 w-6 h-6 inline-flex items-center justify-center bg-fuchsia-700 text-white rounded-full border">
                            <box-icon name="shield-plus"></box-icon>
                          </div>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full text-end xl:hidden">
            <div className="px-2 inline-block xl:hidden cursor-pointer">
              <box-icon name="search"></box-icon>
            </div>
            <div className="px-2 inline-block xl:hidden cursor-pointer">
              <box-icon name="menu"></box-icon>
            </div>
          </div>

          <div className="absolute hidden z-50 top-0 left-0 w-full h-44 flex justify-center items-center xl:h-auto bg-gray-800 shadow shadow-gray-100 xl:bg-inherit p-6 xl:flex xl:justify-end xl:items-center">
            <form className=" flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                  placeholder="Search branch name..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
            <div className="hidden xl:static absolute top-3 right-4 cursor-pointer p-4 z-50">
              <button type="submit" className="text-sm font-bold text-white ">
                Close
              </button>
            </div>
            <div className="hidden xl:static xl:flex xl:justify-end xl:items-center">
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-bold text-white bg-rose-500 rounded-lg border border-rose-500 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Sign Up
              </button>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-bold text-white bg-slate-500 rounded-lg border border-slate-500 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
