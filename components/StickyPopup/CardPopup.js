import React from "react";
import Link from "next/link"
export default class CardPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: null
        }
    }
    handleClick = () => {
        this.setState({
            hidden: "hidden"
        })
    }
    render() {
        return (
            <div >
                <div className={this.state.hidden} >
                    <div className="border shadow fixed rounded-3xl bg-white px-3 py-3 bottom-5 right-10" style={{zIndex:'20'}}>
                        <div className="flex gap-3">
                            <div>
                                <img src="/basket-fill.svg" className="h-10 w-10" alt="" />
                            </div>
                            <div className="w-24">
                                <p>1 item</p>
                                <p className="text-gray-700 font-bold -mt-5">$65.00</p>
                            </div>
                        </div>
                        <div className="grid place-content-end -mt-2" onClick={this.handleClick}>
                            <Link href="/cart">
                            <button className="py-1 px-2 rounded-lg bg-gray-700 text-xs text-white font-semibold">
                                Go to cart
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}