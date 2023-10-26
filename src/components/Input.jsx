import React, { useState } from "react";

function Input({
  type,
  placeholder,
  className,
  Value,
  id,
  inputContainerClass,
  label,
  labelClassName,
}) {
  const [inputValue, setInputValue] = useState("");
  const handelInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    Value(value);
  };
  return (
    <div
      className={`${
        inputContainerClass ? inputContainerClass : " "
      } Input_component flex w-full flex-col`}
    >
      {label ? (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      ) : (
        " "
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={` ${className ? className : "w-full "} outline-none `}
        required
        autoComplete="off"
        value={inputValue}
        onChange={handelInputChange}
      />
    </div>
  );
}

export default Input;
