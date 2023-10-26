import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-2 bg-purple-950">
      <div className="w-full rounded-lg ">
        <div className="text-center w-full">
          <Image src="/banner-main-top.jpg" alt="" width={1800} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
