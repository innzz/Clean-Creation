import React from "react";
import SideBar from "../components/SideBar";
import MealPreference from "../components/Profile/MealPreference";
import ShippingAddress from "../components/Profile/ShippingAddress";
import BillingAddress from "../components/Profile/BillingAddress";
import Cards from "../components/Profile/Cards";
import MyProfile from "../components/Profile/MyProfile";
import SociaCard from "../components/Profile/socialCard";

const Profile = () => {
    return (
        <div className="flex gap-4 ">
            <div className="w-60">
                <SideBar />
            </div>
            <div>
                <MyProfile />
                <SociaCard />
                <MealPreference />
                <ShippingAddress />
                <BillingAddress />
                <Cards />
            </div>
        </div>
    );
};

export default Profile;
