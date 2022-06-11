import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { SSRProvider } from "react-bootstrap";
import LeftPopUp from "../components/StickyPopup/LeftPopUp";
import CardPopup from "../components/StickyPopup/CardPopup";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        {/* <Navbar /> */}
        <LeftPopUp />
        <Component {...pageProps} />
        <CardPopup />
        {/* <Footer /> */}
      </SSRProvider>
    </>
  );
}

export default MyApp;
