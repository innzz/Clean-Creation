import React from "react";
export default class LeftPopUp extends React.Component {
    render() {
        return (
            <div>
                <div className="border shadow fixed bg-white px-10 -ml-20 w-80 h-24 rotate-45 -bottom-16 left-0">
                    <p className="text-xl ml-2 font-bold text-black">Get $20 off</p>
                </div>
                {/* <div className="border shadow fixed bg-white px-10 -ml-20 w-80 h-20 rotate-45 bottom-0 left-0">

                </div> */}
            </div>
        )
    }
}