import React from "react";

const StockCalandar = ({ title, description }) => {
  return (
    <div>
      <div className="text-lg font-semibold">
        <h3 className="text-xl font-medium tracking-tighter">{title}</h3>
        <div className="mt-2">{description}</div>
      </div>

      <div className="h-96 p-4">
        <div className="h-full"></div>
      </div>
    </div>
  );
};

export default StockCalandar;
