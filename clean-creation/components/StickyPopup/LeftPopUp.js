import { Dialog, DialogContent, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
export default class LeftPopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: null,
            popup: false
        }
    }
    handleClick = () => {
        this.setState({
            hidden: "hidden",
            popup: true
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.hidden} onClick={this.handleClick}>
                    <div className="border shadow fixed bg-white px-10 -ml-20 w-80 h-24 rotate-45 -bottom-16 left-0">
                        <p className="text-xl ml-2 font-bold text-black">Get $20 off</p>
                    </div>
                    {/* <div className="border shadow fixed bg-white px-10 -ml-20 w-80 h-20 rotate-45 bottom-0 left-0">

                </div> */}
                </div>
                <Dialog
                    fullWidth
                    open={this.state.popup}
                    onClose={() => {
                        this.setState({ popup: false });
                    }}
                >


                    <DialogContent>
                        <div className="grid grid-cols-2 ">
                            <div className="-ml-3 pr-1">
                                <p className="text-3xl text-center mt-10  font-bold">UNLOCK <span className="text-lime-400">$20 OFF</span> YOUR FIRST ORDER</p>
                            <p className="text-gray-700 text-center ">Get an automatic $20 in your digital wallet when you sign up for email and SMS</p>
                            <input placeholder="First Name" className="border border-2 border-black rounded-lg w-full px-2 py-2" type="text" id="fname" name="fname" />
                            <input placeholder="Email" className="border border-2 mt-2 border-black rounded-lg w-full px-2 py-2" type="text" id="fname" name="fname" />
                            <button className="border border-2 mt-2 border-black rounded-lg w-full px-2 bg-gray-700 py-1">
                                <p className="text-white font-bold mt-2 text-center text-2xl">GET YOUR CODE</p>
                            </button>
                            </div>
                            <div>
                                <img src="/offer.jpeg" className="w-full h-full" alt="" />
                                <IconButton
                                    aria-label="close"
                                    onClick={() => {
                                        this.setState({ popup: false,hidden:null });
                                    }}
                                    style={{backgroundColor:"lightgray"}}
                                    sx={{
                                        position: "absolute",
                                        right: 10,
                                        top: 10,
                                        color: (theme) => theme.palette.grey[500],
                                        backgroundColor: "gray",
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}