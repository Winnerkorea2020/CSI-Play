import Image from "next/image";

const layout = ({ children }) => {
  return (
    <section className="flex flex-col justify-between bg-white w-full min-h-screen -mt-16">
      <div className="flex justify-center pt-16 items-center h-full px-1 xl:px-8 max-w-3xl mx-auto w-full">
        <div className="h-full flex items-center">
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
      <div className="flex-1 h-full ">
        <div>{children}</div>
      </div>
    </section>
  );
};

export default layout;
