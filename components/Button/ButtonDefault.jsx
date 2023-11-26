import React from "react";

const ButtonDefault = ({ title, style, onSubmit }) => {
  return (
    <button type="submit" className={style} onSubmit={onSubmit}>
      {title}
    </button>
  );
};

export default ButtonDefault;
