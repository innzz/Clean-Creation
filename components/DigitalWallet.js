import { TextField } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
export default class DigitalWallet extends React.Component {
    render() {
        return (
            <div className="">
                <div className="mx-3 mb-10 ">
                    <div className="w-full lg:w-[78rem]  border p-3 shadow rounded-xl mt-5 ">
                        <div className="flex  justify-between">
                            <div>
                                <p className="text-md lg:text-lg font-semibold text-gray-600">Digital Wallet Transactions</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-md lg:text-lg font-semibold text-gray-600">Balance: $0.00</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex gap-3">
                            <p className="text-gray-400">Show</p>
                            <select name="dates" id="date" className="border-b w-20 -mt- h-6">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <p className="text-gray-400">entries</p>
                            <div className="flex lg:absolute gap-2 lg:right-10 ">
                                <p className="text-gray-400">Search</p>
                                <TextField id="standard-basic" label="" variant="standard" fullWidth />
                            </div>
                        </div>

                        {/* Table Section */}
                        <Table responsive="lg" className="">
                            <thead className="">
                                <tr>
                                    <th>
                                        <div className=" flex gap-2">
                                            Creation
                                        </div>
                                    </th>
                                    <th>
                                        <div className=" flex gap-2">
                                            <img src="/arrowDownUp.svg" alt="" />
                                            Value
                                        </div>
                                    </th>
                                    <th>
                                        <div className=" flex gap-2">
                                            <img src="/arrowDownUp.svg" alt="" />
                                            Description
                                        </div>
                                    </th>
                                    <th>
                                        <div className=" flex gap-2">
                                            <img src="/arrowDownUp.svg" alt="" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="bg-gray-100">
                                    <td></td>
                                    <td></td>
                                    <td>No Data available in table</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="flex flex-wrap justify-between">
                            <div>
                                <p>Showing 0 to 0 of 0 entries</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-gray-700 text-white text-sm text-center rounded-3xl py-1.5 px-2">PREVIOUS</button>
                                <button className="bg-gray-700 text-white text-sm text-center rounded-3xl py-1.5 px-4">NEXT</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}