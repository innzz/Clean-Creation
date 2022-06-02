import styles from "../styles/Home.module.css";
import PlanForEveryone from "../components/Home/PlanForEveryone";
import GetStarted from "./screens/Home/getStarted";
import HowItWork from "../components/Home/HowItWork";
import OnlineMenu from "../components/Home/OnlineMenu";
import PeopleSaying from "../components/Home/PeopleSaying";
import AdvertisementOne from "../components/Home/AdvertisementOne";
import AdvertisementTwo from "../components/Home/AdvertisementTwo";

const HomeScreen = () => {
  return (
    <>
      <div>
        <GetStarted />
        <HowItWork />
        <OnlineMenu />
        <PlanForEveryone />
        <PeopleSaying />
        <AdvertisementOne />
        <AdvertisementTwo />
      </div>
    </>
  );
};

export default HomeScreen;
