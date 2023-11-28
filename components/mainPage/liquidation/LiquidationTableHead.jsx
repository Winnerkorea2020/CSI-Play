import React from "react";

const LiquidationTableHead = ({ columns }) => {
  return (
    <div className="main__trading__table--thread">
      {columns.map(({ label, accessor }) => {
        return (
          <div key={accessor} className="main__trading__table--thread--cell">
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default LiquidationTableHead;
