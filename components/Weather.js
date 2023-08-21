import Script from "next/script";

const Weather = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        id="ww_909108844d249"
        v="1.3"
        loc="id"
        a='{"t":"responsive","lang":"en","sl_lpl":1,"ids":["wl4479"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'
      >
        Weather Data Source:
        <a
          href="https://wetterlang.de/seoul_wetter_30_tage/"
          id="ww_909108844d249_u"
          target="_blank"
        >
          wetterlang.de/seoul_wetter_30_tage/
        </a>
      </div>
      <Script
        async
        src="https://app2.weatherwidget.org/js/?id=ww_909108844d249"
      ></Script>
    </div>
  );
};

export default Weather;
