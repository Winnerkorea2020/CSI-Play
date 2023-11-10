import Image from "next/image";

const layout = ({ children }) => {
  return (
    <section className="mx-auto container bg-white py-2.5">
      <div className="h-full xl:px-5 flex flex-col justify-between min-h-screen ">
        <div className="">
          <div className="flex items-center">
            {/* Logo */}

            <Image
              className="inline-block"
              src={`../ico-abbc.svg`}
              width={50}
              height={50}
            />
            <span className="text-2xl px-2 font-semibold tracking-tighter">
              CSI-Play
            </span>
          </div>
        </div>
        <div className="flex-1  w-full h-full">
          <div className="h-full ">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default layout;
