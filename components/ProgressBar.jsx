import React from "react";
import { useEffect } from "react";



function ProgressBar({ className }) {
  useEffect(() => {
    document.addEventListener("scroll", scrolled);
    let backToTop = document.getElementById("backToTop");
    
   

    let scrollbarWidth = document.getElementById("scrollbarWidth");

    function scrolled() {
      let viewPortHeight = document.documentElement.clientHeight;
      let scrolledCurrent = viewPortHeight + document.documentElement.scrollTop;
      let totalHeight = document.documentElement.scrollHeight;
      let scrolledPercentage = Math.floor(
        (scrolledCurrent / totalHeight) * 100
      );
      if (scrolledPercentage > 30) {
        scrollbarWidth.style.width = `${scrolledPercentage}%`;
        scrollbarWidth.style.opacity = `70`;
      } else {
        scrollbarWidth.style.opacity = `0`;
      }
    }

    return () => {
      document.removeEventListener("scroll", scrolled);
    };
  }, []);
  return (
    <>
      <div
        id="scrollbarWidth"
        className={`h-1 bg-black dark:bg-secondary transition-all duration-300 flex items-center fixed top-0 left-0`}
      >
        <div className="absolute bg-black dark:bg-secondary h-2 aspect-square right-0 rounded-full"></div>
      </div>
    </>
  );
}

export default ProgressBar;
