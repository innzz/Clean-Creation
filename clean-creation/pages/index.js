import Head from "next/head";
import styles from "../styles/Home.module.css";
import PlanForEveryone from "../components/Home/PlanForEveryone";
import GetStarted from "./screens/Home/getStarted";
import HowItWork from '../components/Home/HowItWork';

import PeopleSaying from "../components/Home/PeopleSaying";

const HomeScreen = () => {
  return (
    <>
      <div>
        <GetStarted />
        <PlanForEveryone />
        <HowItWork />
        <PeopleSaying />
      </div>
    </>
  );
};

export default HomeScreen;
