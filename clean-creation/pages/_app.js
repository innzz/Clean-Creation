import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </>
  );
}

export default MyApp;
