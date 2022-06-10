import { TextField } from "@mui/material";
import React from "react";
export default class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <p className="font-semibold text-3xl text-gray-600">Contact</p>
                <p className="font-semibold text-lg text-gray-700 ">Our main kitchen and pickup point</p>
                <p style={{ lineHeight: "1px" }} className="text-sm">1105 Lafayette St, Gretna, Louisiana 70053</p>
                <p className="font-semibold text-lg mt-20 text-gray-700">Get in touch</p>
                <a className="text-black no-underline">504-309-5427</a>
                <p className="text-sm">customerservice@bookonepos.net</p>

                <div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 py-4">
                        <div className="py-3">
                            <label className="text-xs text-gray-500">First Name</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className=" py-3">
                            <label className="text-xs text-gray-500">Last Name</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Email</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className=" py-3">
                            <label className="text-xs text-gray-500">Phone</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Company Name</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3 ">
                            <label className="text-xs text-gray-500">Website</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>

                    </div>
                    <div className="py-3 ">
                        <label className="text-xs text-gray-500">How did you hear about us?</label>
                        <TextField id="standard-basic" label="" variant="standard" fullWidth />
                    </div>
                    <div className="py-3 ">
                        <label className="text-xs text-gray-500">Message</label>
                        <TextField id="standard-basic" multiline
                            rows={4} label="" variant="standard" fullWidth />
                    </div>
                </div>
                <button className="bg-teal-500 px-4 py-2 rounded-3xl text-white font-semibold mb-10">Submit</button>
            </div>
        )
    }
}