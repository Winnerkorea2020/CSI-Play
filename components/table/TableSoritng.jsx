import Image from "next/image";
import Pagination from "../pagination/Pagination";
import { TbCaretUpDownFilled } from "react-icons/tb";

const TableSoritng = () => {
  return (
    <div>
      <div className=" overflow-auto overscroll-x-auto">
        <table className="table-auto w-full">
          <thead className="text-sm font-medium">
            <tr className="border-b">
              <th className="font-medium py-3 text-left">
                <button>
                  <span>코인</span>
                </button>
              </th>
              <th className="font-medium py-3 text-center">
                <button className="inline-flex">
                  <span>링크</span>
                  <TbCaretUpDownFilled size={20} className="ml-2" />
                </button>
              </th>
              <th className="font-medium py-3 text-right">
                <button className="inline-flex">
                  <span>가격</span>
                  <TbCaretUpDownFilled size={20} className="ml-2" />
                </button>
              </th>
              <th className="font-medium py-3 text-right">
                <button className="inline-flex">
                  <span>24시</span>
                  간 변화% <TbCaretUpDownFilled size={20} className="ml-2" />
                </button>
              </th>
              <th className="font-medium py-3 text-right">
                <button className="inline-flex">
                  <span>시가총액</span>
                  <TbCaretUpDownFilled size={20} className="ml-2" />
                </button>
              </th>
              <th className="font-medium py-3 text-right">
                <button className="inline-flex">
                  <span>USD 표시 24시간 거래량</span>
                  <TbCaretUpDownFilled size={20} className="ml-2" />
                </button>
              </th>
              <th className="font-medium py-3 text-right">
                <button className="inline-flex">
                  <span>김프</span>
                  <TbCaretUpDownFilled size={20} className="ml-2" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm ">
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2.5 flex items-center gap-2">
                <div>
                  <Image src="/" alt="Coins" width={30} height={30}></Image>
                </div>
                <div>
                  <div>BTC</div>
                  <div>BitCoin</div>
                </div>
              </td>
              <td className="py-2.5 text-center">1</td>
              <td className="py-2.5 text-right">
                <div>1613.46</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">-1.70%</td>
              <td className="py-2.5 text-right">
                <div>321.5038</div>
                <div>21.02.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>22.308</div>
                <div>21.023.000</div>
              </td>
              <td className="py-2.5 text-right">
                <div>+1.96%</div>
                <div>40.8</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-5">
        <Pagination />
      </div>
    </div>
  );
};

export default TableSoritng;
