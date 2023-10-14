import React, { useState } from "react";

function InputS({ type, placeholder, inputValue, className }) {
  const [rowVal, setRowVal] = useState("");
  const inputHandelChange = (e) => {
    const newInputVal = e.target.value;
    setRowVal(newInputVal);
    inputValue(newInputVal);
  };
  return (
    <>
      <input
        type={type}
        value={rowVal}
        placeholder={placeholder}
        required
        className={className}
        onChange={inputHandelChange}
      />
    </>
  );
}

export default InputS;
