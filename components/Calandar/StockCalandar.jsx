import React from "react";

const StockCalandar = ({ title, description }) => {
  return (
    <div>
      <div class="text-gray-700 border border-2">
        <div class="flex flex-grow overflow-auto">
          <div class="flex flex-col flex-grow">
            <div class="flex items-center mt-4">
              <div class="flex ml-6">
                <button></button>
                <button></button>
              </div>
              <h2 class="ml-2 text-xl font-bold leading-none">
                September, 2020
              </h2>
            </div>
            <div class="grid grid-cols-7 mt-4">
              <div class="pl-1 text-sm">Mon</div>
              <div class="pl-1 text-sm">Tue</div>
              <div class="pl-1 text-sm">Wed</div>
              <div class="pl-1 text-sm">Thu</div>
              <div class="pl-1 text-sm">Fri</div>
              <div class="pl-1 text-sm">Sat</div>
              <div class="pl-1 text-sm">Sun</div>
            </div>
            <div class="grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-px pt-px mt-1 bg-gray-200">
              <div></div>
              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">1 September</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">2</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">3</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">4</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">5</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">6</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">7</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">8</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">9</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">10</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">11</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">12</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">13</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">14</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">15</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">16</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">17</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">18</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">19</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">20</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">21</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">22</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">23</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">24</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">25</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">26</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">27</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">28</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">29</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>

              <div class="relative flex flex-col bg-white group">
                <span class="mx-2 my-1 text-xs font-bold">30</span>
                <div class="flex flex-col px-1 py-1 overflow-auto">
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">8:30am</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      An unconfirmed event
                    </span>
                  </button>
                  <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                    <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span class="ml-2 font-light leading-none">2:15pm</span>
                    <span class="ml-2 font-medium leading-none truncate">
                      A confirmed event
                    </span>
                  </button>
                </div>
                <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600"
        href="https://twitter.com/lofiui"
        target="_top"
      >
        <div class="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full"></div>
        <span class="text-sm ml-1 leading-none">@lofiui</span>
      </a>
    </div>
  );
};

export default StockCalandar;
