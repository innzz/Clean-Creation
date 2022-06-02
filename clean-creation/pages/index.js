import styles from "../styles/Home.module.css";
import PlanForEveryone from "../components/Home/PlanForEveryone";
import HowItWork from "../components/Home/HowItWork";
import OnlineMenu from "../components/Home/OnlineMenu";
import PeopleSaying from "../components/Home/PeopleSaying";
import AdvertisementOne from "../components/Home/AdvertisementOne";
import AdvertisementTwo from "../components/Home/AdvertisementTwo";
import Getstarted from "../components/Home/GetStarted";

const HomeScreen = () => {
  return (
    <>
      <div>
        <Getstarted />
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
