import React from "react";

const Checkbox = ({ title, checked, onChange }) => {
  return (
    <label htmlFor="">
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {title}
    </label>
  );
};

export default Checkbox;
