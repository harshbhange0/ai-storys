import React from "react";

function Button({ className, onClick, children }) {
  return (
    <>
      <button
        className={`${
          className ? className : ""
        } Button_component`}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
