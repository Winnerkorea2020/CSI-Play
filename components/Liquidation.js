import Link from "next/link";
import Image from "next/image";
import { LiaAngleRightSolid } from "react-icons/lia";

const Liquidation = () => {
  return (
    <div className="card h-full">
      <div className="flex flex-col items-start 2xl:flex-row 2xl:justify-between 2xl:items-center w-full">
        <div className="basis-1/2">
          <div className="main__box--title ">
            <h2 className="main__title">거래소 청산</h2>

            <Link className="" href={`/`}>
              <LiaAngleRightSolid size={20} />
            </Link>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex justify-between xl:justify-end items-center gap-3">
            <div className="flex flex-col items-start justify-between sm:flex-row gap-2 sm:items-center">
              <label
                htmlFor="currencylist_2"
                className="block font-medium py-2.5 text-base text-end"
              >
                코인
              </label>
              <select
                id="currencylist_2"
                className="w-32 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5"
              >
                <option className="" selected>
                  All
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start justify-between sm:flex-row gap-2 sm:items-center">
              <label
                htmlFor="currencylist_1"
                className="block font-medium py-2.5 text-base text-end"
              >
                기간
              </label>
              <select
                id="currencylist_1"
                className="w-32 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5"
              >
                <option className="" selected>
                  Choose Times
                </option>
                <option className="" value="ThirtyMINUTE">
                  30 Minute
                </option>
                <option className="" value="HOUR">
                  1 Hour
                </option>
                <option className="" value="TwoHOUR">
                  2 Hours
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="main__board--card overflow-x-auto">
        <div className="w-full overscroll-x-contain">
          <div className="main__trading__table">
            <div className="main__trading__table--thread">
              <div className="main__trading__table--thread--cell">거래소</div>
              <div className="main__trading__table--thread--cell">청산($)</div>
              <div className="main__trading__table--thread--cell">
                공매수($)
              </div>
              <div className="main__trading__table--thread--cell">
                공매도($)
              </div>
              <div className="main__trading__table--thread--cell">백분율</div>
              <div className="main__trading__table--thread--cell">
                Long/Shot
              </div>
            </div>
            {/* 합계 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">합계</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>

            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>

            {/* 코인정보 */}
            <div className="main__trading__table--tbody">
              <div className="main__trading__table--tbody--cell">
                <Image
                  className=" inline-block"
                  src="/ico-abbc.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">25,630M</div>
              <div className="main__trading__table--tbody--cell">223M</div>
              <div className="main__trading__table--tbody--cell">
                <div className="shadow w-full bg-gray-300 rounded">
                  <div
                    className="bg-blue-400 text-xs leading-none py-1 text-center rounded text-white"
                    style={{ width: `45%` }}
                  >
                    45%
                  </div>
                </div>
              </div>
              <div className="main__trading__table--tbody--cell">
                <span className="hidden xl:inline-block">99.13</span>{" "}
                <span>Long</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidation;
