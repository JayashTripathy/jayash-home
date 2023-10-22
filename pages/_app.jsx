import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  function getCoookie(name) {
    const cookies = document.cookie.split(";");

    for (const cookie in cookies) {
      const [cookieName, cookieVal] = cookies[cookie].split("=");

      if (cookieName.trim() === name) {
        return cookieVal;
      }
    }
  }
  useEffect(() => {
    const initialTheme = getCoookie("jt-theme");

    if (initialTheme) {
      const html = document.querySelector("html");
      html.classList.add(initialTheme);
    } else {
      const html = document.querySelector("html");
      html.classList.add("dark");
      document.cookie = `jt-theme=dark`;
    }
  }, []);
  return (
    <>
      <ThemeProvider enableSystem={true}>
        <div className="app">
          <ProgressBar />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
