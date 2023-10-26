import Image from "next/image";

const JoinLayout = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto -mt-16 px-12 py-8 h-full w-full bg-white">
        <div className="flex justify-center pt-16 items-center h-full px-1 xl:px-8 max-w-3xl mx-auto w-full">
          <div className="h-full">
            {/* Logo */}
            <div className="flex items-center justify-center mb-5">
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

            <div className="h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinLayout;
