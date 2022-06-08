import React from "react";
import { Col, Row } from "react-bootstrap";
import ContinueToCart from "../components/Meals/ContinueToCart";
import SideBar from "../components/SideBar";
import RandomMeal from "../components/Meals/RandomMeal";
import MacroTracking from "../components/MacroTracking/MacroTracking";
import TotalTable from "../components/MacroTracking/TotalTable";

const macroTracking = () => {
    return (
        <div className="flex gap-4">
            <div className="lg:w-60">
                <SideBar />
            </div>
            <div>
                <MacroTracking />
                <TotalTable />
            </div>
        </div>
    );
};

export default macroTracking;
