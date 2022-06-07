import React from "react";
export default class SociaCard extends React.Component {
    render() {
        return (
            <div className="grid lg:grid-cols-3 gap-4 mx-5 my-2">
                {/* Section 1 */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-800 grid place-content-center justify-items-center rounded-2xl h-auto lg:w-[24rem] w-80 p-3">
                    <p className="text-white text-center lg:text-lg font-semibold">
                        Invite your friends and get money!
                    </p>
                    <img
                        className="lg:h-32 h-20"
                        src="/invite.svg"
                        alt=""
                    />
                    <div className="grid place-content-center mt-3">
                        <button className="bg-pink-500 rounded-xl text-white font-semibold px-10 py-2">INVITE A FRIEND</button>
                    </div>
                </div>
                {/* Section 2 */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 grid place-content-center justify-items-center rounded-2xl h-auto lg:w-[24rem] w-80 p-3">
                    <p className="text-white text-center lg:text-lg font-semibold">
                        Give us your feedback
                    </p>
                    <img
                        className="lg:h-32 h-20"
                        src="/reviews.png"
                        alt=""
                    />
                    <div className="grid place-content-center mt-3">
                        <button className="bg-pink-500 rounded-xl text-white font-semibold px-10 py-2">REVIEW ON GOOGLE</button>
                    </div>
                    <div className="grid place-content-center mt-3">
                        <button className="bg-pink-500 rounded-xl text-white font-semibold px-10 py-2">REVIEW ON FACEBOOK</button>
                    </div>
                </div>
                {/* Section 3 */}
                <div className="bg-gradient-to-r from-blue-800 to-cyan-400 grid place-content-center justify-items-center rounded-2xl h-auto lg:w-[24rem] w-80 p-3">
                    <p className="text-white text-center lg:text-lg font-semibold">
                    Start spending that gift money!
                    </p>
                    <img
                        className="lg:h-32 h-20"
                        src="/gift.svg"
                        alt=""
                    />
                    <div className="grid place-content-center mt-3">
                        <button className="bg-pink-500 rounded-xl text-white font-semibold px-10 py-2">REDEEM GIFT CARD</button>
                    </div>
                </div>
            </div>
        )
    }
}