import Image from "next/image";

const CardTypeA = ({ itemData }) => {
  return (
    <>
      {itemData.map((data) => {
        return (
          <div
            key={data.id}
            className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm flex flex-col justify-center items-center h-full gap-y-5"
          >
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center ">
              <div className=" w-44">
                <span>1시간 Rekt</span>
              </div>
              <div className=" w-44">
                <span>$</span>
                <span>{data.value}</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center ">
              <div className=" w-44">
                <span>Long</span>
              </div>
              <div className=" w-44">
                <span>$</span>
                <span>{data.value}</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center ">
              <div className=" w-44">
                <span>Short</span>
              </div>
              <div className=" w-44">
                <span>$</span>
                <span>{data.value}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardTypeA;
