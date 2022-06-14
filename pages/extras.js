import React from "react";
import Extras from "../components/Shop/Extras";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
export default class Extrass extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <Extras />
                <Footer />
            </div>
        )
    }
}