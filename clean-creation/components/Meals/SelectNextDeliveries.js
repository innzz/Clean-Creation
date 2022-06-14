import React from "react";
import Link from "next/link";
export default class SelectNextDeliveries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [
                {
                    month: "June 2022",
                    day: "SUN",
                    number: "12",
                    meals: "3 meals"
                },
                {
                    month: "",
                    day: "WED",
                    number: "15",
                    meals: "2 meals"
                },
            ]
        }
    }
    render() {
        return (
            <div className="mt-10 mx-7">
                <div className="shadow w-full rounded-xl py-2 px-4">
                    <p className="text-gray-700 text-lg font-semibold">Select Next Deliveries</p>
                    <p className="text-xs font-semibold">(If you do not select your meals before cutoff time, the system will auto-select for you based on your dislikes allergies, preferences, your meal's rating system, and previous purchases - Make sure you have your preferences saved!)</p>

                    <div className="grid lg:grid-cols-2 gap-3 mb-4">
                        <div className="flex gap-2">
                            {this.state.dates.map((s, i) => {
                                return (
                                    <div key={i} className="w-20">
                                        <p className="italic font-semibold text-gray-500">{s.month}</p>
                                        <div className="border-2 group border-gray-200 hover:text-lime-500 hover:border-teal-500 cursor-pointer pt-3 px-3 rounded-lg " style={{ marginTop: s.month === "" ? "40px" : "", lineHeight: "5px" }}>
                                            <p className="font-bold text-gray-400 group-hover:text-teal-500">{s.day}</p>
                                            <p className="text-3xl font-bold text-gray-400 group-hover:text-teal-500">{s.number}</p>
                                        </div>
                                        <div className="grid place-content-center">
                                            <button className="-mt-2 text-white px-2 font-bold text-xs rounded-lg bg-teal-500">{s.meals}</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <p className="text-3xl">Order for</p>
                            <p className="font-semibold text-3xl">Sunday, June 12, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Change Plan */}
                <div className="grid lg:grid-cols-2 mt-4 gap-4">
                    <div className="p-2 shadow rounded-xl lg:w-[27rem] w-full">
                        <div className="relative overflow-x-auto  ">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">

                                            Plan
                                        </th>
                                        <td className="px-6 py-2">
                                            The Everything Plan
                                        </td>
                                    </tr>
                                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Billing Plan
                                        </th>
                                        <td className="px-6 py-2">
                                            1 Week Plan with Breakfast
                                        </td>
                                    </tr>
                                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Billing Renewal Cycle
                                        </th>
                                        <td className="px-6 py-2">
                                            1
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Days per week
                                        </th>
                                        <td className="px-6 py-2">
                                            5
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Meals per day
                                        </th>
                                        <td className="px-6 py-2">
                                            1
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grid place-content-center">
                            <Link href="/subscription">
                                <button className="text-white text-center bg-blue-500 lg:px-40 px-20 py-1 rounded-lg font-semibold">
                                    Change Plan
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-2 shadow rounded-xl lg:-ml-40 lg:h-32">
                        <div className="flex gap-2">
                            <img src="/danger.svg" className="h-5 w-5 mt-1" alt="" />
                            <p>
                                Make sure you are on the <span className="text-amber-700 " data-tooltip-target="tooltip-default">main delivery/pickup day!</span>
                                Selecting Random will choose the meals for you, for that day, based on your preferences The selections are added to cart and you have to checkout, you will only be charged if you selected any extra or premium meals. Meals that were checked out/processed cannot be changed.
                            </p>
                            <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                The day when all meals are going to be delivered/pickup. This day can have meals for several week days if the kitchen only delivers for example 2 days a week
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}