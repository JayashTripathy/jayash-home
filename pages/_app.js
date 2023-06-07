import "@/styles/globals.scss";
import $ from "jquery";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Navabar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   $(window).mousemove(function (e) {
  //     $(".cursor").css({
  //       left: e.pageX,
  //       top: e.pageY,
  //     });
  //   });
  //   $("a , .hero-subtext, button")
  //     .on("mouseenter", function () {
  //       $(".cursor").addClass("active");
  //     })
  //     .on("mouseleave", function () {
  //       $(".cursor").removeClass("active");
  //     });
  // }, []);

  // useEffect(() => {
  //   const htmlattr = $("html").attr("data-theme");
  //   console.log(htmlattr);
  //   htmlattr === "Default Theme" ? $("html").addClass("dark") : $("html").removeClass("dark");
  // }, []);

  // back-to-top functionality

  useEffect(() => {
    let isThrottled = false; //for throttling
    let timeoutId = null; //for debouncing
    document.addEventListener("scroll", scrolled);

    function scrolled() {
      if (!isThrottled) {
        isThrottled = true;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          let viewPortHeight = document.documentElement.clientHeight;
          let scrolledCurrent =
            viewPortHeight + document.documentElement.scrollTop;
          let totalHeight = document.documentElement.scrollHeight;
          let scrolledPercentage = Math.floor(
            (scrolledCurrent / totalHeight) * 100
          );

          console.log(scrolledPercentage);
          isThrottled = false;
        }, 10);
      }
    }

    return () => {
      document.removeEventListener("scroll", scrolled);
    };
  }, []);

  return (
    <>
      <ThemeProvider enableSystem={true}>
        <div className="app">
          {/* <div className="cursor cursor-shadow"></div>
      <div className="cursor cursor-dot"></div> */}
          <Navabar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
