import React from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const CalandarTypeA = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="w-full">
          <div className="md:p-8 p-5 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              <span
                tabindex="0"
                className="focus:outline-none  text-base font-bold text-gray-800"
              >
                October 2023
              </span>
              <div className="flex items-center">
                <button
                  aria-label="calendar backward"
                  className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
                >
                  <LiaAngleLeftSolid size={20} />
                </button>
                <button
                  aria-label="calendar forward"
                  className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
                >
                  {/* ICON */}
                  <LiaAngleRightSolid size={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          Sa
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">
                          Su
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-6">
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td className="pt-6">
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td className="pt-6">
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">1</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">2</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">3</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">4</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">5</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">6</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">7</p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <a
                            role="link"
                            tabindex="0"
                            className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                          >
                            8
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">9</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">10</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">11</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          12
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          13
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          14
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          15
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          16
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">17</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">18</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          19
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          20
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          21
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          22
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          23
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">24</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500">25</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          26
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          27
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          28
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          29
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-6 py-6 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 font-medium">
                          30
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5  bg-gray-100 rounded-b">
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500 ">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                >
                  Zoom call with design team
                </a>
                <p className="text-sm pt-2 xl:leading-4 leading-none text-gray-600 ">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 ">
                  10:00 AM
                </p>
                <a
                  tabindex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                >
                  Orientation session with new hires
                </a>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 ">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                >
                  Zoom call with design team
                </a>
                <p className="text-sm pt-2 xl:leading-4 leading-none text-gray-600 ">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 ">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                >
                  Zoom call with design team
                </a>
                <p className="text-sm pt-2 xl:leading-4 leading-none text-gray-600 ">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 ">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                >
                  Zoom call with design team
                </a>
                <p className="text-sm pt-2 xl:leading-4 leading-none text-gray-600 ">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalandarTypeA;
