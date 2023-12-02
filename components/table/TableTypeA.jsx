import Image from "next/image";
import { TbCaretUpDownFilled } from "react-icons/tb";

const TableTypeA = () => {
  return (
    <table className="table-auto w-full">
      <thead className="">
        <tr className="bg-gray-100">
          <th className="py-3">
            <div className="font-medium px-10 flex justify-start  items-center">
              <div>코인/거래금액</div>
              <button className="px-3">
                <TbCaretUpDownFilled size={20} />
              </button>
            </div>
          </th>
          <th className="py-3">
            <div className="font-medium px-10 flex justify-center  items-center">
              <div>시세(KRW)</div>
              <button className="px-3">
                <TbCaretUpDownFilled size={20} />
              </button>
            </div>
          </th>
          <th className="py-3">
            <div className="font-medium flex justify-end  items-center">
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
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2.5 flex items-center gap-2 px-3">
            <div>
              <Image src="/" alt="Coins" width={30} height={30}></Image>
            </div>
            <div>
              <div>BTC</div>
              <div>BitCoin</div>
            </div>
          </td>

          <td className="py-2.5 text-center">
            <div className="px-5">21.023.000</div>
          </td>
          <td className=" py-2.5 text-right px-10">
            <span className="px-2 py-1.5 bg-red-500 text-white">-1.70%</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTypeA;
