import React from "react";
import {
    Col,
    Row,
} from "react-bootstrap";
export default class CustomMealDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [
                {
                    month: "June 2022",
                    day: "SUN",
                    number: "12"
                },
                {
                    month: "",
                    day: "WED",
                    number: "15"
                },
                {
                    month: "",
                    day: "SUN",
                    number: "19"
                },
                {
                    month: "",
                    day: "WED",
                    number: "22"
                },
                {
                    month: "",
                    day: "SUN",
                    number: "26"
                },
                {
                    month: "",
                    day: "WED",
                    number: "29"
                },
                {
                    month: "July 2022",
                    day: "SUN",
                    number: "03"
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="bg-lime-500">
                    <div className="container pt-2 pb-8 grid lg:grid-cols-2  ">
                        <p className="text-3xl font-semibold text-white">Custom Meal Builder</p>
                        <a href="#" className="lg:absolute no-underline lg:right-44 w-full lg:w-72 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg style={{color: "white", }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle-fill lg:-mt-5 mr-2" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" fill="white"></path> </svg>
                            <div class="text-left">
                                <div class="mb-1 text-md">How to Order Custom Meal Builder?</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="container grid lg:grid-cols-2 gap-5 py-3">
                    <div>
                        <p className="font-semibold text-xl text-gray-600">1. Select a Date</p>
                        <div className="grid grid-cols-4 lg:grid-cols-7 gap-2">
                            {this.state.dates.map((s) => {
                                return (
                                    <div>
                                        <p className="italic font-semibold text-gray-500">{s.month}</p>
                                        <div className="border-2 group border-gray-200 hover:text-lime-500 hover:border-lime-500 cursor-pointer pt-3 px-3 rounded-lg " style={{ marginTop: s.month === "" ? "40px" : "", lineHeight: "5px" }}>
                                            <p className="font-bold text-gray-400 group-hover:text-lime-500">{s.day}</p>
                                            <p className="text-3xl font-bold text-gray-400 group-hover:text-lime-500">{s.number}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl">Order for</p>
                        <p className="font-semibold text-3xl">Sunday, June 12, 2022</p>
                    </div>
                </div>
            </div>
        )
    }
}