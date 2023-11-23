import React from "react";

const Button = ({ title, style, onSubmit }) => {
  return (
    <button type="submit" className={style} onSubmit={onSubmit}>
      {title}
    </button>
  );
};

export default Button;
