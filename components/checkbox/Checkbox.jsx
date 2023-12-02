"use client";
import React from "react";

const Checkbox = ({ title, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      <span className="px-0.5">{title}</span>
    </label>
  );
};

export default Checkbox;
