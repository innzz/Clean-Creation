import React from "react";
import MenuItem from "../components/CurrentMenu/MenuItem";
export default class CurrentMenuItem extends React.Component {
    render() {
        return (
            <div>
                <div className="bg-teal-500">
                    <p className="text-white container py-3 text-3xl font-semibold">Balsamic Chicken Salad (16 oz)</p>
                </div>
                <div className="container">
                    <MenuItem />
                </div>
            </div>
        )
    }
}