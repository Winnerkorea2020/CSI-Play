import React from "react";

const Checkbox = ({ disabled, checked, onChange }) => {
  return (
    <label htmlFor="">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
    </label>
  );
};

export default Checkbox;
