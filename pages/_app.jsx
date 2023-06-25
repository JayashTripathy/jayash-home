import "@/styles/globals.scss";
import $ from "jquery";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Navabar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true}>
        <div className="app">
          <ProgressBar />
          <Navabar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
