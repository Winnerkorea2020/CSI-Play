import Image from "next/image";

const CardTypeA = ({ itemData }) => {
  return (
    <>
      {itemData.map((data) => {
        return (
          <div
            key={data.id}
            className="text-center border border-gray-300 rounded-lg px-2 py-4 shadow-sm"
          >
            <div className="inline-flex">
              <Image
                src={`../${data.icon}`}
                width={40}
                height={40}
                className="rounded-full"
                alt=""
              />
            </div>
            <div>
              <span>$</span>
              <span>{data.value}</span>
            </div>
            <div>
              <span>≈</span>
              <span>{data.value_k}</span> <span>{data.coin}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardTypeA;
