import React from "react";
import PickupLocations from "../components/PickupLocation/PickupLocations";
import Map from "../components/PickupLocation/Map";
export default class Pickup extends React.Component {
    render() {
        return (
            <div>
                <div className=" container grid lg:grid-cols-2 gap-4">
                    <div>
                        <PickupLocations />
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}