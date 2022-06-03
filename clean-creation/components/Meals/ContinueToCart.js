import { Card } from "@mui/material";
import React from "react";
export default class ContinueToCart extends React.Component {
    render() {
        return (
            <div>
                <div className="p-10 shadow w-[72rem] rounded-lg">
                    <a href="#" class=" no-underline inline-flex items-center py-2 px-3 text-medium text-center text-white bg-lime-500 rounded-lg ">
                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill mr-2" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" fill="white"></path> </svg>
                        Add Extra Add-on
                    </a>
                </div>
                <br />
                <div className="p-10 shadow w-[72rem] rounded-lg">
                    <a href="#" class=" no-underline inline-flex items-center py-2 px-3 text-medium text-center text-white bg-lime-500 rounded-lg ">
                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill mr-2" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" fill="white"></path> </svg>
                        Add Extra Add-on
                    </a>
                </div>
            </div>
        )
    }
}