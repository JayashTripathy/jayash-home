import "@/styles/globals.scss";
import $ from "jquery";
import { useEffect } from "react";
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

  return (
    <>
    <div className="app">

      {/* <div className="cursor cursor-shadow"></div>
      <div className="cursor cursor-dot"></div> */}
      <Navabar />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}
