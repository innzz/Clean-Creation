import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PlanForEveryone from "../components/Home/PlanForEveryone";

const HomeScreen = () => {
  return (
    <>
      <div>
        <PlanForEveryone />
      </div>
    </>
  );
};

export default HomeScreen;
