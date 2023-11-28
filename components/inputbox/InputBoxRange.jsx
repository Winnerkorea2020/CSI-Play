"use client";

import { useState, useEffect, useRef } from "react";

function InputBoxRange({ min, max, value, step }) {
  const [sliderRange, setSliderRange] = useState(value);
  const [inputValue, setInputValue] = useState(value);
  const sliderRef = useRef(null);

  function handleSliderInput() {
    // Get range between max & min volume
    const range = max - min;
    // Get distance between value and min value
    const distance = sliderRef.current.value - min;
    // Turn into percentage
    const percentage = (distance / range) * 100;
    // Set slider range to percentage
    setSliderRange(percentage);
    // set input Value for number input to slider value
    setInputValue(sliderRef.current.value);
  }

  // Run function when slider reference is set

  useEffect(() => {
    handleSliderInput();
  }, [sliderRef]);

  function handleNumberInput(e) {
    // Set number input value to a new variable
    const newValue = parseInt(e.target.value);
    // Check if it's below the min value
    if (newValue < min) {
      // Set it to the min value
      setInputValue(min);
      // Set slider to the beginnging
      setSliderRange(0);
      // Check if it's above the max value
    } else if (newValue > max) {
      // Set it to the max value
      setInputValue(max);
      // Set Slider to the end
      setSliderRange(100);
    } else {
      // Set number input value to the new variable
      setInputValue(newValue);
      // Redo calculation from before for the slider range
      const range = max - min;
      const distance = newValue - min;
      const percentage = (distance / range) * 100;
      setSliderRange(percentage);
    }
  }

  return (
    <div className="relative">
      {/* Input Value */}
      <div className="flex items-center justify-start py-2">
        <div className="text-sm tracking-tighter font-medium mr-2">
          현재 레버리지:
        </div>
        {inputValue == "0" ? (
          <input
            type="number"
            onInput={handleNumberInput}
            value="1"
            className="number-input"
            min={min}
            max={max}
            step={step}
          />
        ) : (
          <input
            type="number"
            onInput={handleNumberInput}
            value={inputValue}
            className="number-input"
            min={min}
            max={max}
            step={step}
          />
        )}
      </div>
      <div className="range-slider__body ">
        <div className="range-slider">
          <div className="slider-container">
            {inputValue == "0" ? (
              <input
                type="range"
                onInput={handleSliderInput}
                value="1"
                className="slider"
                min={min}
                max={max}
                ref={sliderRef}
                step={step}
              />
            ) : (
              <input
                type="range"
                onInput={handleSliderInput}
                value={inputValue}
                className="slider"
                min={min}
                max={max}
                ref={sliderRef}
                step={step}
              />
            )}

            <div
              className="slider-thumb"
              style={{ left: `calc(${sliderRange}% - 0.5em)` }}
            ></div>
            <div
              className="progress"
              style={{ width: `${sliderRange}%` }}
            ></div>
          </div>
          <div className="slider-values">
            <div className=" w-full">
              <div className=" w-full left-0">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-gray-500 text-base">{`${
                    min + 1
                  }x`}</div>

                  <div className="font-semibold text-gray-500 text-base">
                    25x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    50x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    75x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">
                    100x
                  </div>
                  <div className="font-semibold text-gray-500 text-base">{`${max}x`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBoxRange;
