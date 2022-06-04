import React from "react";
export default class SelectDate extends React.Component {
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