import React from "react";
import CustomMealPack from "../components/Shop/CustomMealPack"
import CustomMealDate from "../components/Shop/CustomMealDate"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default class CustomMeal extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <CustomMealDate />
                <CustomMealPack />
                <Footer />
            </div>
        )
    }
}