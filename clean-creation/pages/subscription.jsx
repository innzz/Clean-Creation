import React from "react";
import SecondaryNav from "../components/SecondaryNav";
import UserPlanSelection from "../components/Subscription/UserPlanSelection";

const SubscriptionScreen = () => {
  return (<div>
            <SecondaryNav heading={'Weekly Subscription'} buttonText={'How to Order Weekly Subscription?'} />
            <UserPlanSelection />
        </div>);
};

export default SubscriptionScreen;
