import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PlanForEveryone from "../components/Home/PlanForEveryone";
import Navbar from "./screens/navbar";
import Footer from "./screens/footer";
import GetStarted from "./screens/Home/getStarted";


const HomeScreen = () => {
  return (
    <>
      <div>
        <PlanForEveryone />
             <Navbar />
             <GetStarted />
             <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
