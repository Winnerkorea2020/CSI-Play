import React from "react";

const WarnningMessageTypeA = ({ message }) => {
  return (
    <div className="warning">
      <p className="warning__description">{message[0]}</p>
    </div>
  );
};

export default WarnningMessageTypeA;
