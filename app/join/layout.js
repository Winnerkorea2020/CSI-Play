import Image from "next/image";

const JoinLayout = ({ children }) => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 container mx-auto px-12 h-screen w-full bg-white">
        <div className="flex justify-center items-center h-full px-1 xl:px-8 max-w-3xl mx-auto w-full">
          <div className="">
            {/* Logo */}
            <div className="flex items-center justify-center mb-52">
              <Image
                className="inline-block"
                src={`../ico-abbc.svg`}
                width={50}
                height={50}
              />
              <span className="text-2xl font-semibold tracking-tighter">
                CSI-Play
              </span>
            </div>

            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinLayout;
