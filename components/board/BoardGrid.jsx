"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BoardTableHeader from "./BoardTableHeader";

const BoardGrid = ({ title }) => {
  const pathnamne = usePathname();
  const id = "1";
  console.log(pathnamne);
  return (
    <div>
      <BoardTableHeader title={"코인분석"} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="border rounded-lg p-4 shadow overflow-hidden">
          <Link href={`${pathnamne}/${id}`} className="cursor-pointer">
            <h3 className="text-lg font-medium tracking-tighter">'R'의 공포(2022.12.17 토)</h3>
            <div>BTCUSD.P, 240</div>
            <div className="h-72 relative rounded-lg p-1">
              <img
                src="https://s3.tradingview.com/3/3EjlqLEe_mid.webp"
                className=" absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="indent-2 mt-2 text-justify tracking-tighter text-base h-60 sm:h-32 lg:h-44 whitespace-break-spaces truncate	">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow overflow-hidden">
          <Link href={`${pathnamne}/${id}`} className="cursor-pointer">
            <h3 className="text-lg font-medium tracking-tighter">'R'의 공포(2022.12.17 토)</h3>
            <div>BTCUSD.P, 240</div>
            <div className="h-72 relative rounded-lg p-1">
              <img
                src="https://s3.tradingview.com/3/3EjlqLEe_mid.webp"
                className=" absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="indent-2 mt-2 text-justify tracking-tighter text-base h-60 sm:h-32 lg:h-44 whitespace-break-spaces truncate	">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow overflow-hidden">
          <Link href={`${pathnamne}/${id}`} className="cursor-pointer">
            <h3 className="text-lg font-medium tracking-tighter">'R'의 공포(2022.12.17 토)</h3>
            <div>BTCUSD.P, 240</div>
            <div className="h-72 relative rounded-lg p-1">
              <img
                src="https://s3.tradingview.com/3/3EjlqLEe_mid.webp"
                className=" absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="indent-2 mt-2 text-justify tracking-tighter text-base h-60 sm:h-32 lg:h-44 whitespace-break-spaces truncate	">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow overflow-hidden">
          <Link href={`${pathnamne}/${id}`} className="cursor-pointer">
            <h3 className="text-lg font-medium tracking-tighter">'R'의 공포(2022.12.17 토)</h3>
            <div>BTCUSD.P, 240</div>
            <div className="h-72 relative rounded-lg p-1">
              <img
                src="https://s3.tradingview.com/3/3EjlqLEe_mid.webp"
                className=" absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="indent-2 mt-2 text-justify tracking-tighter text-base h-60 sm:h-32 lg:h-44 whitespace-break-spaces truncate	">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow overflow-hidden">
          <Link href={`${pathnamne}/${id}`} className="cursor-pointer">
            <h3 className="text-lg font-medium tracking-tighter">'R'의 공포(2022.12.17 토)</h3>
            <div>BTCUSD.P, 240</div>
            <div className="h-72 relative rounded-lg p-1">
              <img
                src="https://s3.tradingview.com/3/3EjlqLEe_mid.webp"
                className=" absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="indent-2 mt-2 text-justify tracking-tighter text-base h-60 sm:h-32 lg:h-44 whitespace-break-spaces truncate	">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow overflow-hidden">
          <Link href={`${pathnamne}/${id}`} className="cursor-pointer">
            <h3 className="text-lg font-medium tracking-tighter">'R'의 공포(2022.12.17 토)</h3>
            <div>BTCUSD.P, 240</div>
            <div className="h-72 relative rounded-lg p-1">
              <img
                src="https://s3.tradingview.com/3/3EjlqLEe_mid.webp"
                className=" absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="indent-2 mt-2 text-justify tracking-tighter text-base h-60 sm:h-32 lg:h-44 whitespace-break-spaces truncate	">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoardGrid;
