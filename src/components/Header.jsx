import React from "react";

function Header({ title, img_url, img_container_className, img_className }) {
  return (
    <header className="Header_component flex w-full items-center justify-center bg-white py-2 shadow-lg  sm:py-4 ">
      {img_url ? (
        <div className={img_container_className}>
          <img className={img_className} src={img_url} alt={title} />
        </div>
      ) : (
        <> </>
      )}
      {title ? (
        <span className="ms-5  w-full bg-gradient-to-tr from-blue-500 via-purple-400 to-blue-500  bg-clip-text text-2xl font-semibold text-gray-100/5 sm:ms-10 sm:text-4xl md:ms-14">
          {title}
        </span>
      ) : (
        <> </>
      )}
    </header>
  );
}

export default Header;
