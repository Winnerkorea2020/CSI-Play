import React from "react";

const InputBox = ({ label, title, type, placeholder, required }) => {
  return (
    <div>
      <label
        htmlFor="inputbox"
        className={`${
          label ? "block" : "hidden"
        } mb-2 text-sm font-medium text-gray-900 `}
      >
        {title}
      </label>
      <input
        type={type}
        name="text"
        id="inputbox"
        className="input__login"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputBox;
