import { useState } from "react";

const MenuMobile = (props) => {

  return (
    <div className="w-full h-full z-10 bg-gray-900 bg-opacity-98 top-0 left-0 fixed sticky-0">
      <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
        <h1 className="text-[32px] text-gray-400">
          hider<span className="text-lightGreen">lab.</span>
        </h1>
        <div className="w-96 text-[32px] md:w-auto relative flex flex-col justify-center items-center py-16 px-4 md:px-24 xl:py-24 xl:px-36">
          {props.list}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
