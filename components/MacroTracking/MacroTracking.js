import React from "react";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import { ProgressBar, Table } from "react-bootstrap";
import MyProfile from "./MyProfile";
import AvailableDates from "./AvailableDates";
import MyMacronutrients from "./MyMacronutrients";
export default class MacroTracking extends React.Component {
    render() {
        return (
            <div className="lg:mx-5 mx-2">
                <p className="text-gray-800 font-semibold text-2xl mt-5">My Subscription Meals</p>
                <div className="grid lg:grid-cols-3 gap-4">
                    {/* First Card */}
                  <MyProfile />
                    {/* Second Card */}
                   <AvailableDates />
                    {/* Third Card */}
                  <MyMacronutrients />
                </div>
            </div>
        )
    }

}