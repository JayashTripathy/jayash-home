import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

export default function App({ Component, pageProps }) {
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
