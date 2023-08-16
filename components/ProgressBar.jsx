import React, { use } from "react";
import { useEffect } from "react";

function ProgressBar({ className }) {
  const [scrollVal, setScrollVal] = React.useState(0);

  useEffect(() => {
    function scrolled() {
      let viewPortHeight = document.documentElement.scrollTop;
      let totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const value = Math.floor((viewPortHeight / totalHeight) * 100);

      setScrollVal(value);
    }

    document.addEventListener("scroll", scrolled);

    return () => {
      document.removeEventListener("scroll", scrolled);
    };
  }, []);

  return (
    <>
      <div
        className={`h-1 bg-black dark:bg-secondary transition-all duration-300 flex items-center fixed top-0 left-0 ease-in-out]`}
        style={{
          width: `${scrollVal}%`,
        }}
      >
        <div className="absolute bg-black dark:bg-secondary h-2 aspect-square right-0 rounded-full"></div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{
          bottom: scrollVal ? "40px" : "-100px",
        }}
        className={`aspect-square h-16 md:h-12 bg-gray-400  hover:opacity-100 fixed right-40 rounded-full cursor-pointer  group  shadow-xl md:right-5  transition-all duration-300 ease-in-out z-10 border-0 bottom-[-100px]`}
      >
        <div className="aspect-square h-0  group-hover:h-full transition-all duration-200 animate-pulse ease-in-out bg-highlighting rounded-full absolute right-1/2 bottom-1/2 group-hover:right-0 group-hover:bottom-0 cursor-pointer "></div>
      </button>
    </>
  );
}

export default ProgressBar;
