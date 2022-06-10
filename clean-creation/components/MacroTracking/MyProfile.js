import React from "react";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import { ProgressBar, Table } from "react-bootstrap";
export default class MyProfile extends React.Component {
    render() {
        return (
            <div className="lg:mx-5 mx-2">
                    <div className="border h-full p-4 rounded-xl shadow w-80 lg:w-96 gap-3">
                        <p className="text-xl text-gray-700 font-semibold ">My Profile</p>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-gray-400">I am:</p>
                                <p className="-mt-4">--</p>
                                <p className="text-gray-400 -mt-4">Height:</p>
                                <p className="-mt-4"></p>
                                <p className="text-gray-400 -mt-4">Bodyfat:</p>
                                <p className="-mt-4">--</p>
                                <p className="text-gray-400 -mt-4">Activity Level:</p>
                                <p className="-mt-4">--</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Age:</p>
                                <p className="-mt-4">0</p>
                                <p className="text-gray-400 -mt-4">Weight:</p>
                                <p className="-mt-4">--Ibs</p>
                                <p className="text-gray-400 -mt-4">I want to:</p>
                                <p className="-mt-4">--</p>
                                <p className="text-gray-400 -mt-4">Macro Ratio:</p>
                                <p className="-mt-4">Carbohydrates: -- % | Proteins: -- % | Fats: -- %</p>
                            </div>
                        </div>
                        <Table responsive="lg">
                            <thead className="text-center">
                                <tr>
                                    <th>Calories</th>
                                    <th>Proteins</th>
                                    <th>Carbohydrates</th>
                                    <th>Fats</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>-- kcal</td>
                                    <td>-- g</td>
                                    <td>-- g</td>
                                    <td>-- g</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className=" grid place-content-center">
                            <button className="bg-teal-500 p-2 font-semibold  rounded-xl">Set Recommended Daily Value</button>
                        </div>
                    </div>
                </div>
        )
    }

}