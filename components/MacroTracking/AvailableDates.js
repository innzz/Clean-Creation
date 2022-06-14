import React from "react";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import { ProgressBar, Table } from "react-bootstrap";
export default class AvailableDates extends React.Component {
    render() {
        return (
            <div className="lg:mx-5 mx-2">
                <div className="border p-4 rounded-xl h-full shadow w-80 lg:w-96 gap-3">
                    <div className="grid grid-cols-3 gap-0">
                        <div className="col-start-1 col-span-2"><p className="text-lg font-semibold text-gray-700">Available dates</p></div>
                        <div className="col-end-4 col-span-1">
                            <select name="time" id="time" className="border p-1 -ml-8 lg:-ml-3">
                                <option value="last delivery">Last Delivery</option>
                                <option value="last 30 days">Last 30 Days</option>
                                <option value="this month">This Month</option>
                                <option value="last month">Last Month</option>
                                <option value="custom range">Custom Range</option>
                            </select>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 text-center mt-4 font-semibold ">June 2022</p>
                    <div className="">
                        <Table responsive="lg" className="">
                            <thead className="text-center">
                                <tr>
                                    <th>Su</th>
                                    <th>Mo</th>
                                    <th>Tu</th>
                                    <th>We</th>
                                    <th>Th</th>
                                    <th>Fr</th>
                                    <th>Sa</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className=" grid place-content-end">
                        <button className="bg-gray-700 text-white text-center rounded-xl py-2.5 px-4">Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}