const CardHorizonalTypeC = () => {
  return (
    <div>
      <div className="flex items-center rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 px-4">
        <img
          className="object-cover w-16 h-16"
          src="https://plus.unsplash.com/premium_photo-1680230177375-2b3c7778b0b2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h1 className="text-sm tracking-tight text-gray-700">
            <span>2022년도 9월 13일 긴급 추가 관점 : " 21700이 붕괴 &#62; 매수 중지"</span>
          </h1>
          <div className="text-xl font-medium tracking-tight text-gray-900">
            <span> Litecoin / TetherUS (BINANCE:LTCUSDT)</span>
            <span className="text-red-500 px-2">79.08 -0.82 -1.03%</span>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="pr-2">업데이트됨</span>
            <span>2022 9월 14</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHorizonalTypeC;
