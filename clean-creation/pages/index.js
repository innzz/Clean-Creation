import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PlanForEveryone from "../components/Home/PlanForEveryone";
<<<<<<< HEAD
import Navbar from "./screens/navbar";
import Footer from "./screens/footer";
import GetStarted from "./screens/Home/getStarted";

=======
import PeopleSaying from "../components/Home/PeopleSaying";
>>>>>>> 22370af (Carousel Component Created.)

const HomeScreen = () => {
  return (
    <>
      <div>
        <PlanForEveryone />
<<<<<<< HEAD
             <Navbar />
             <GetStarted />
             <Footer />
=======
        <PeopleSaying />
>>>>>>> 22370af (Carousel Component Created.)
      </div>
    </>
  );
};

export default HomeScreen;
