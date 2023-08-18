"use client";
import { useState } from "react";

function RangeInput({ min, max, step }) {
  const [inputValue, setInputValue] = useState(50);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div className="range flex items-center w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={inputValue}
        onChange={handleInputChange}
        className="range-input w-72 hidden xl:block"
      />
      <span className="ml-2">{`${inputValue}%`}</span>
    </div>
  );
}

export default RangeInput;
