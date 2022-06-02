import Head from "next/head";
import styles from "../styles/Home.module.css";
import PlanForEveryone from "../components/Home/PlanForEveryone";
import GetStarted from "./screens/Home/getStarted";

import PeopleSaying from "../components/Home/PeopleSaying";

const HomeScreen = () => {
  return (
    <>
      <div>
        <GetStarted />
        <PlanForEveryone />
        <PeopleSaying />
      </div>
    </>
  );
};

export default HomeScreen;
