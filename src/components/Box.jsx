import React from "react";

function Box({ children, className }) {
  return (
    <section
      className={`${className ? className : " h-full w-full "} Box_component `}
    >
      {children}
    </section>
  );
}

export default Box;
