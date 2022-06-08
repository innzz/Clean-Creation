import React from "react";
import SideBar from "../components/SideBar";

import DigitalWallet from "../components/DigitalWallet";

const digitalWallet = () => {
    return (
        <div className="flex gap-4">
            <div className="lg:w-60">
                <SideBar />
            </div>
            <div>
                <DigitalWallet />
            </div>
        </div>
    );
};

export default digitalWallet;
