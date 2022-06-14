import React from "react";
export default class PickupLocations extends React.Component {
    render() {
        return (
            <div>
                <p className="text-3xl text-gray-700 font-semibold">Pickup Locations</p>
                <div className="grid grid-cols-2 gap-4 place-content-between border p-3 mt-16 rounded-xl">
                    <div style={{lineHeight:"15px"}}>
                        <p className="text-2xl text-gray-700 font-semibold">Baton Rouge (Raw):</p>
                        <p className="text-gray-600">18303 Parkins Rd E,</p>
                        <p className="text-gray-600">Baton Rouge, LA 70810</p>
                    </div>
                    <div>
                        <button className="bg-teal-500 rounded-full h-10 w-10 grid place-content-center lg:mt-20 mt-28 lg:ml-60 ml-28 ">
                            <img src="/search.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 place-content-between border p-3 mt-3 rounded-xl">
                    <div style={{lineHeight:"15px"}}>
                        <p className="text-2xl text-gray-700 font-semibold">Baton Rouge (Raw):</p>
                        <p className="text-gray-600">18303 Parkins Rd E,</p>
                        <p className="text-gray-600">Baton Rouge, LA 70810</p>
                    </div>
                    <div>
                        <button className="bg-teal-500 rounded-full h-10 w-10 grid place-content-center lg:mt-20 mt-28 lg:ml-60 ml-28 ">
                            <img src="/search.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 place-content-between border p-3 mt-3 mb-3 rounded-xl">
                    <div style={{lineHeight:"15px"}}>
                        <p className="text-2xl text-gray-700 font-semibold">Baton Rouge (Raw):</p>
                        <p className="text-gray-600">18303 Parkins Rd E,</p>
                        <p className="text-gray-600">Baton Rouge, LA 70810</p>
                    </div>
                    <div>
                        <button className="bg-teal-500 rounded-full h-10 w-10 grid place-content-center lg:mt-20 mt-28 lg:ml-60 ml-28 ">
                            <img src="/search.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}