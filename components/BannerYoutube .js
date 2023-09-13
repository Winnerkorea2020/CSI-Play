import Script from "next/script";

const BannerYoutube = () => {
  return (
    <div className="">
      <iframe
        width="100%"
        height="350px"
        src="https://www.youtube.com/embed/iDjQSdN_ig8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BannerYoutube;
