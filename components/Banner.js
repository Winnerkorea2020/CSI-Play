import Image from "next/image";
const Banner = () => {
  return (
    <div class="mt-2">
      <div class="w-full rounded-lg px-4">
        <div class="text-center w-full">
          <Image src="/banner-main-top.jpg" alt="" width={600} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
