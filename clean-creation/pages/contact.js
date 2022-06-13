import React from "react";
import Contact from "../components/Blog/Contact";
import Map from "../components/Blog/Map";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container grid lg:grid-cols-3 mt-3">
                    <div className="lg:col-span-2 ">
                        <Contact />
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}