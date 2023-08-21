import Image from "next/image";
import Link from "next/link";
import { LiaEditSolid } from "react-icons/lia";

const DashBoardRead = () => {
  return (
    <div className="card__board flex-1 mt-2">
      <div className="container mt-12 mx-auto md:px-6">
        <section className="mb-32">
          <h1 className="mb-4 text-3xl font-bold">
            An intriguing title for an interesting article
          </h1>

          <div className="flex items-center justify-start gap-1">
            <span className=" font-semibold">Tag :</span>
            <span className="font-medium rounded-lg border bg-gray-400 text-white px-4 py-1">
              공지사항
            </span>
            <div className="flex justify-start items-center">
              <Link
                href="/dashboard/1/modify"
                className="flex justify-start items-center gap-2 font-medium rounded-lg border bg-blue-400 hover:bg-blue-500 text-white  px-4 py-1"
              >
                <LiaEditSolid size={15} />
                수정하기
              </Link>
            </div>
          </div>
          <div className="text-lg">
            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              sapiente molestias consectetur. Fuga nulla officia error placeat
              veniam, officiis rerum laboriosam ullam molestiae magni velit
              laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis
              rerum laboriosam ullam molestiae magni velit laborum itaque minima
              doloribus eligendi!
            </p>

            <p className="mb-6 text-lg leading-7 ">
              <strong>Optio sapiente molestias consectetur?</strong>
            </p>

            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              architecto ex ab aut tempora officia libero praesentium, sint id
              magnam eius natus unde blanditiis. Autem adipisci totam sit
              consequuntur eligendi.
            </p>

            <p className="mb-6 text-lg leading-7 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 ">
              <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio odit consequatur porro sequi ab distinctio
              modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
              illum saepe mollitia ut voluptatum.
            </p>

            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, libero repellat molestiae aperiam laborum aliquid
              atque magni nostrum, inventore perspiciatis possimus quia incidunt
              maiores molestias eaque nam commodi! Magnam, labore.
            </p>

            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
              className="mb-6 text-lg leading-7 w-full rounded-lg shadow-lg "
              alt=""
            />

            <ul className="mb-6 text-lg leading-7 list-inside list-disc">
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
              <li>Sit</li>
              <li>Amet</li>
            </ul>

            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              sapiente molestias consectetur. Fuga nulla officia error placeat
              veniam, officiis rerum laboriosam ullam molestiae magni velit
              laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis
              rerum laboriosam ullam molestiae magni velit laborum itaque minima
              doloribus eligendi!
            </p>
            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              sapiente molestias consectetur. Fuga nulla officia error placeat
              veniam, officiis rerum laboriosam ullam molestiae magni velit
              laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis
              rerum laboriosam ullam molestiae magni velit laborum itaque minima
              doloribus eligendi!
            </p>
            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              sapiente molestias consectetur. Fuga nulla officia error placeat
              veniam, officiis rerum laboriosam ullam molestiae magni velit
              laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis
              rerum laboriosam ullam molestiae magni velit laborum itaque minima
              doloribus eligendi!
            </p>
            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              sapiente molestias consectetur. Fuga nulla officia error placeat
              veniam, officiis rerum laboriosam ullam molestiae magni velit
              laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis
              rerum laboriosam ullam molestiae magni velit laborum itaque minima
              doloribus eligendi!
            </p>
            <p className="mb-6 text-lg leading-7 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              sapiente molestias consectetur. Fuga nulla officia error placeat
              veniam, officiis rerum laboriosam ullam molestiae magni velit
              laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis
              rerum laboriosam ullam molestiae magni velit laborum itaque minima
              doloribus eligendi!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoardRead;
