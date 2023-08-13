import Image from "next/image";
const Banner = () => {
  return (
    <div className="mt-2">
      <div className="w-full rounded-lg ">
        <div className="text-center w-full">
          <Image src="/banner-main-top.jpg" alt="" width={600} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
