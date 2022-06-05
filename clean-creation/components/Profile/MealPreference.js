import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React from "react";
export default class MealPreference extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: false,
            two: false,
            three: false,
            searchValue: [
                {
                    value: 'Show Meals that match any one of the options selected -- OR',
                    label: 'Show Meals that match any one of the options selected -- OR',
                }, {
                    value: 'Show meals that match every option selected - AND',
                    label: 'Show meals that match every option selected - AND',
                },
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="shadow p-4 rounded-xl mt-5">
                    <p className="text-xl text-gray-700 font-semibold">My Meal Preferences</p>
                    <hr />
                    <div className="grid lg:grid-cols-3 lg:gap-4">
                        <div className="col-span-2 ">
                            <div className="shadow  p-3 rounded-2xl mb-3 grid lg:grid-cols-3">
                                <div className="col-span-2">
                                    <p className="text-lg text-gray-700 font-semibold">Select your allergens</p>
                                </div>
                                <div>
                                    <button onClick={() => { this.setState({ one: true }) }} className="bg-lime-400 text-white lg:px-24 px-32 py-2 rounded-lg">Edit</button>
                                </div>
                            </div>
                            <div className="shadow p-3 rounded-2xl mb-3 grid lg:grid-cols-3">
                                <div className="col-span-2">
                                    <p className="text-lg text-gray-700 font-semibold">Select your dislikes</p>
                                </div>
                                <div>
                                    <button onClick={() => { this.setState({ two: true }) }} className="bg-lime-400 text-white lg:px-24 px-32 py-2 rounded-lg">Edit</button>
                                </div>
                            </div>
                            <div className="shadow p-3 rounded-2xl mb-3 grid lg:grid-cols-3">
                                <div className="col-span-2 flex">
                                    <p className="text-lg text-gray-700 font-semibold">Select your diet preferences -</p>
                                    <p className="text-lg text-gray-500">OR</p>
                                </div>
                                <div>
                                    <button onClick={() => { this.setState({ three: true }) }} className="bg-lime-400 text-white lg:px-24 px-32 py-2 rounded-lg">Edit</button>
                                </div>
                            </div>
                        </div>


                        <div className="bg-purple-500 grid place-content-center justify-items-center rounded-2xl h-60 lg:w-auto w-80 p-3">
                            <p className="text-white text-center lg:text-lg font-semibold">
                                Don't forget to set your preferences so our system can automatically filter meals that you'd want to eat!
                            </p>
                            <img className="lg:h-32 h-20" src="https://cleancreations.com/assets/images/alert_banner.svg" alt="" />
                        </div>
                    </div>

                </div>


                {/* Dialog Box for SELECT YOUR ALLERGENS */}
                <Dialog fullWidth
                    style={{ borderRadius: "50%" }}
                    open={this.state.one}
                    onClose={() => {
                        this.setState({ one: false });
                    }}>
                    <DialogTitle>
                        <p className="text-2xl font-bold text-center text-serif">SELECT YOUR ALLERGENS</p>
                    </DialogTitle>
                    <DialogContent>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Search</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <button className="bg-gray-200 text-xs rounded-lg p-1 ">Dairy (Lactose)</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Eggs</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Fish</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Fruit/Berries</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Nuts</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Shelfish</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Soy</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Wheat (Gluten)</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Yogurt</button>
                        </div>
                    </DialogContent>
                    <hr />
                    <DialogContent className=" -mt-4 ">
                        <div className="grid grid-cols-2 divide-x">
                            <div onClick={() => { this.setState({ one: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Cancel</button>
                            </div>
                            <div onClick={() => { this.setState({ one: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Save</button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>

                {/* Dialog Box for SELECT YOUR DISLIKES */}
                <Dialog fullWidth
                    style={{ borderRadius: "50%" }}
                    open={this.state.two}
                    onClose={() => {
                        this.setState({ two: false });
                    }}>
                    <DialogTitle>
                        <p className="text-2xl font-bold text-center text-serif">SELECT YOUR DISLIKES</p>
                    </DialogTitle>
                    <DialogContent>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Search</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <button className="bg-gray-200 text-xs rounded-lg p-1 ">Dairy (Lactose)</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Eggs</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Fish</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Fruit/Berries</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Nuts</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Shelfish</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Soy</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Wheat (Gluten)</button>
                            <button className="bg-gray-200 text-xs rounded-lg p-2 ">Yogurt</button>
                        </div>
                    </DialogContent>
                    <hr />
                    <DialogContent className=" -mt-4 ">
                        <div className="grid grid-cols-2 divide-x">
                            <div onClick={() => { this.setState({ two: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Cancel</button>
                            </div>
                            <div onClick={() => { this.setState({ two: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Save</button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>

                {/* Dialog Box for SELECT YOUR DIET PREFERENCES */}
                <Dialog fullWidth
                    style={{ borderRadius: "50%" }}
                    open={this.state.three}
                    onClose={() => {
                        this.setState({ three: false });
                    }}>
                    <DialogTitle>
                        <p className="text-2xl font-bold text-center text-serif">SELECT YOUR DIET PREFERENCES</p>
                    </DialogTitle>
                    <DialogContent>
                        <div>
                            <label className="text-xs">Search</label>
                            <TextField fullWidth
                                id="standard-select-currency-native"
                                select
                                label=""
                                value={this.state.searchValue}
                                onChange={(event) => { this.setState({ searchValue: event.target.value }) }}
                                SelectProps={{
                                    native: true,
                                }}
                                variant="standard"
                            >
                                {this.state.searchValue.map((s) => (
                                    <option key={s.value} value={s.value}>
                                        {s.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>

                    </DialogContent>
                    <hr />
                    <DialogContent className=" -mt-4 ">
                        <div className="grid grid-cols-2 divide-x">
                            <div onClick={() => { this.setState({ three: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Cancel</button>
                            </div>
                            <div onClick={() => { this.setState({ three: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                                <button className="">Save</button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>

                

            </div>
        )
    }
}