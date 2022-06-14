import React from "react";
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [
                {
                    value: 'Select',
                    label: '--Select--',
                }, {
                    value: 'Louisiana',
                    label: 'Louisiana',
                },
            ],

            addCard: false,
        }
    }
    render() {
        return (
            <div className="container mb-5">
                <div className="shadow grid lg:grid-cols-8 p-4 rounded-xl mt-5">
                    <div className="flex col-span-7">
                        <p className="text-xl text-gray-700 font-semibold">My Cards</p>
                        <button className="bg-teal-500 text-xs font-semibold text-white px-1 h-4 rounded-lg mt-2 ml-1">Gretna / Baton Rouge</button>
                    </div>
                    <div>
                        <button onClick={() => { this.setState({ addCard: true }) }} className="px-4 py-3 rounded-lg bg-gray-800 text-white">Add new Card</button>
                    </div>
                </div>

                {/* Dialog Box for Add New Card */}
                <Dialog fullWidth
                    style={{ borderRadius: "50%" }}
                    open={this.state.addCard}
                    onClose={() => {
                        this.setState({ addCard: false });
                    }}>
                    <DialogTitle>
                        <p className="text-2xl font-bold text-center text-serif">ADD NEW CARD</p>
                    </DialogTitle>
                    <DialogContent>
                        <div>
                            <label className="text-xs">Search</label>
                            <TextField id="standard-basic" label="1234 1234 1234 1234" variant="standard" fullWidth />
                        </div>
                        <div className="lg:flex gap-5 mt-2 md:w-1/2">
                            <div>
                                <label className="text-xs">Expires date</label><br />
                                <TextField id="standard-basic" label="MM / YY" variant="standard" fullWidth />
                            </div>
                            <div>
                                <label className="text-xs">Code</label>
                                <TextField id="standard-basic" label="CVC" variant="standard" fullWidth />
                            </div>

                        </div>

                    </DialogContent>
                    <hr />
                    <DialogContent className=" -mt-4 ">
                        <div className="grid grid-cols-2 divide-x">
                            <div onClick={() => { this.setState({ addCard: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Cancel</button>
                            </div>
                            <div onClick={() => { this.setState({ addCard: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Save</button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>


            </div>
        )
    }
}