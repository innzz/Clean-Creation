import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material"

import CloseIcon from "@mui/icons-material/Close";
export default class CartConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delivery: false,
            pickup: false,
            states: [
                {
                    value: 'Select',
                    label: '--Select--',
                }, {
                    value: 'Louisiana',
                    label: 'Louisiana',
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <p className="lg:text-2xl text-xl font-bold text-gray-700 md:px-0 lg:px-0 px-3  pt-5 ">How would you like to receive your order?</p>

                    <div className="flex gap-2 px-10 lg:px-0 place-content-center lg:place-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-stopwatch" viewBox="0 0 16 16"> <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" /> <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" /> </svg>
                        <p className="font-semibold text-gray-700">Wednesday, Jun 08, 2022</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /> </svg>
                        <div class="flex items-center -mt-4 ">
                            <input onClick={() => { this.setState({ delivery: true }) }} id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delivery</label>
                        </div>
                        <div class="flex items-center -mt-4 ">
                            <input onClick={() => { this.setState({ pickup: true }) }} checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pickup</label>
                        </div>
                    </div>
                    <div className="mb-10 p-3 bg-gray-200 border-l-[7px] border-red-600 lg:leading-3" >
                        <p className="font-bold">An error occured!</p>
                        <p>Please select a valid State to continue checkout process</p>
                        <a href="/" className="text-gray-500">Edit</a>
                    </div>
                    <p className="text-2xl text-gray-800 font-bold pt-5">Payment Method</p>
                    <div class="flex items-center -mt-4 ">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-2" className="ml-2 text-lg font-normal text-gray-600 dark:text-gray-300">Credit Card</label>
                    </div>
                    <button type="button" className="mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg px-4 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                        <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                        Add new Card
                    </button>
                    <p className="text-2xl text-gray-800 font-bold pt-20">Add a Promo Code</p>
                    <div className="mb-5 flex gap-3">
                        <TextField id="standard-basic" label="Add promo code" variant="standard" fullWidth />
                        <button className="px-2 py-3.5 w-32  rounded-xl bg-gray-200 hover:bg-lime-500 hover:text-white">Apply Code</button>
                    </div>
                </div>

                <Dialog fullWidth
                    open={this.state.pickup}
                    onClose={() => {
                        this.setState({ pickup: false });
                    }}
                >
                    <DialogTitle>
                        <p className="text-2xl text-gray-500 text-serif">Select Your Pickup</p>
                        <IconButton
                            aria-label="close"
                            onClick={() => {
                                this.setState({ pickup: false });
                            }}
                            sx={{
                                position: "absolute",
                                right: 10,
                                top: 10,
                                color: (theme) => theme.palette.grey[500],
                                backgroundColor: "gray"
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <div className="border-1 rounded-lg border-black p-2 ">
                            <div className="">
                                <p className="font-semibold lg:text-lg text-sm">Gretna</p>
                                <p className=" grid place-content-end text-sm -mt-10">Click to Select</p>
                                <p className="-mt-3 lg:text-lg text-xs">1105 Lafayette St 70053 Gretna | $0.00</p>
                            </div>
                        </div>
                        <div className="border-1 rounded-lg border-black p-2 mt-4 ">
                            <div className="">
                                <p className="font-semibold lg:text-lg text-sm">Highland Park Market Place</p>
                                <p className=" grid place-content-end -mt-10 lg:text-sm text-xs">Click to Select</p>
                                <p className="-mt-3 lg:text-lg text-xs">18303 Perkins Rd E Ste 409 70810 Baton Rouge | $0.00</p>
                                <p className="text-xs lg:text-lg">* orders will be available for pickup after 12:00 PM on Sunday and Wednesday each week *</p>
                            </div>
                        </div>

                    </DialogContent>
                    <hr />
                    <DialogContent className="hover:bg-gray-500 -mt-4 ">
                        <div className="grid hover:text-white text-gray-400 place-content-center">
                            <button className="">Cancel</button>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Dialog Box for Delivery */}
                <Dialog fullWidth
                    open={this.state.delivery}
                    onClose={() => {
                        this.setState({ delivery: false });
                    }}>
                    <DialogTitle>
                        <p className="text-2xl text-gray-500 text-serif">Delivery Address</p>
                        <IconButton
                            aria-label="close"
                            onClick={() => {
                                this.setState({ delivery: false });
                            }}
                            sx={{
                                position: "absolute",
                                right: 10,
                                top: 10,
                                color: (theme) => theme.palette.grey[500],
                                backgroundColor: "gray"
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <div className="border-1 rounded-lg border-gray-300  ">
                            <div className="divide-y-2 ">
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 py-4">
                                    <div>
                                        <label className="text-xs">Street Address</label>
                                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                                    </div>
                                    <div className=" ">
                                        <label className="text-xs">City</label>
                                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 py-4">
                                    <div>
                                        <label className="text-xs">State</label>
                                        <TextField fullWidth
                                            id="standard-select-currency-native"
                                            select
                                            label=""
                                            value={this.state.states}
                                            onChange={(event) => { this.setState({ states: event.target.value }) }}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                        >
                                            {this.state.states.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div>
                                        <label className="text-xs">Zip Code</label>
                                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 py-4">
                                    <div>
                                        <label className="text-xs">Phone</label>
                                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                                    </div>
                                    <div>
                                        <label className="text-xs">Gate Code</label>
                                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                                    </div>
                                </div>
                                <div className="grid gap-2 px-2 py-4">
                                    <div>
                                        <label className="text-xs">Delivery Note</label>
                                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                        <div class="flex items-center  ">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save address to profile and use for all future deliveries</label>
                        </div>
                    </DialogContent>
                    <hr />
                    <DialogContent className=" -mt-4 ">
                        <div className="grid grid-cols-2 divide-x">
                            <div className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Cancel</button>
                            </div>
                            <div className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Save</button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}