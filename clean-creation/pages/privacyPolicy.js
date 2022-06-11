import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PrivacyPolicy from "../components/PrivacyPolicy";
export default class Privacy extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <PrivacyPolicy />
                </div>
                <Footer />
            </div>
        )
    }
}