import React from "react";
import SecondaryNav from "../components/SecondaryNav";
import UserPlanSelection from "../components/Subscription/UserPlanSelection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const SubscriptionScreen = () => {
  return (<div>
    <NavBar />
            <SecondaryNav heading={'Weekly Subscription'} buttonText={'How to Order Weekly Subscription?'} />
            <UserPlanSelection />
            <Footer />
        </div>);
};

export default SubscriptionScreen;
