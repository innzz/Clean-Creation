import React from "react";
import CustomMealPack from "../components/Shop/CustomMealPack"
import CustomMealDate from "../components/Shop/CustomMealDate"
export default class CustomMeal extends React.Component{
    render(){
        return(
            <div>
                <CustomMealDate />
                <CustomMealPack />
            </div>
        )
    }
}