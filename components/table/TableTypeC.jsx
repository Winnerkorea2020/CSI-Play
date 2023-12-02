import Image from "next/image";
import React from "react";
import { TbCaretUpDownFilled, TbArrowBadgeUpFilled } from "react-icons/tb";

const TableTypeC = () => {
  return (
    <table className="table-auto w-full">
      <thead className="">
        <tr className="bg-gray-100">
          <th className="py-3 text-left">
            <div className="font-medium px-10 inline-flex justify-start  items-center">
              <div>거래소</div>
              <button className="px-3">
                <TbCaretUpDownFilled size={20} />
              </button>
            </div>
          </th>
          <th className="py-3 text-center">
            <div className="font-medium px-10 inline-flex justify-end  items-center">
              <div>심볼</div>
            </div>
          </th>
          <th className="py-3 text-center">
            <div className="font-medium px-10 inline-flex  items-center">
              <div>현재가격</div>
              <button className="px-3">
                <TbCaretUpDownFilled size={20} />
              </button>
            </div>
          </th>

          <th className="py-3 text-center">
            <div className="font-medium px-10 inline-flex  items-center">
              <div>미체결약정</div>
              <button className="px-3">
                <TbCaretUpDownFilled size={20} />
              </button>
            </div>
          </th>
          <th className="py-3 text-right">
            <div className="font-medium inline-flex justify-end  items-center">
              <div>24시간 변동률</div>
              <button className="px-3">
                <TbCaretUpDownFilled size={20} />
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="text-sm ">
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 inline-flex items-center gap-2 px-3">
            <Image src="/" alt="Coins" width={30} height={30}></Image>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center px-5">BTC USDT</td>
          <td className="py-2.5 text-center px-5">
            <div>24897.79</div>
            <div className="inline-flex text-red-500">
              1.73%
              <TbArrowBadgeUpFilled size={20} />
            </div>
          </td>
          <td className="py-2.5 text-center px-5">2,815.6</td>
          <td className="py-2.5 text-right px-5">14,600.2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTypeC;
