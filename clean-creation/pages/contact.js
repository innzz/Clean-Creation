import React from "react";
import Contact from "../components/Blog/Contact";
import Map from "../components/Blog/Map";
export default class ContactPage extends React.Component {
    render() {
        return (
            <div className="container grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Contact />
                </div>
                <div>
                    <Map />
                </div>
            </div>
        )
    }
}