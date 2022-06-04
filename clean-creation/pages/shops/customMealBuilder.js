import React from "react";
import CustomMealDate from "../../components/Shop/CustomMealDate";
import CustomMealPack from "../../components/Shop/CustomMealPack";
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