import React from "react";
import CustomMealDate from "../components/Meals/CustomMealDate";
import CustomMealPack from "../components/Meals/CustomMealPack";
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