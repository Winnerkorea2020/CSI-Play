"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="border bg-white shadow h-28">
      {/* Pass the settings prop to the Slider component */}
      <Slider
        {...settings}
        className="flex justify-center items-center h-28 bg-red-300"
      >
        <div className="flex justify-center items-center bg-emerald-400 h-28">
          <div className="flex justify-center items-center h-full bg-red-800">
            aaaa
          </div>
        </div>
        <div className="flex justify-center items-center bg-emerald-400 h-28">
          <div className="flex justify-center items-center h-full bg-blue-800">
            cccc
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSide;
