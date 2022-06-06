import {
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
export default class ContinueToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div>
        <div className="lg:p-10 p-5 lg:ml-6 shadow lg:w-[69rem] w-[23rem] ml-5 rounded-2xl">
          <button
            onClick={() => {
              this.setState({ open: true });
            }}
            href="/"
          ><a className=" no-underline inline-flex items-center py-2 px-3 text-medium text-center text-white bg-lime-500 rounded-lg ">
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-plus-circle-fill mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                  fill="white"
                ></path>{" "}
              </svg>
              Add Extra Add-on
            </a>
          </button>
        </div>
        <br />
        <div className="lg:p-10 p-5 shadow lg:ml-6 lg:w-[69rem] w-[23rem] ml-5 mb-5 rounded-2xl flex flex-wrap lg:flex-nowrap place-content-center gap-5">
          <button >
            <a  href="/" className=" no-underline lg:w-[30rem] sm:w-[20rem] bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center lg:px-4 px-14 py-3 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <img src="/cart.svg" alt="" />
              <div className="ml-2 text-left">
                <div className="mb-1 lg:text-md text-sm">CONTINUE TO CART</div>
              </div>
            </a>
          </button>
          <button href="/" >
            <a className=" no-underline lg:w-[30rem] w-96 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center lg:px-4 px-1 py-3 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div className="ml-2 text-left">
                <div className="mb-1 lg:text-md text-sm">
                  CHOOSE MEALS FOR NEXT ORDER DATE
                </div>
              </div>
            </a>
          </button>
        </div>
        <Dialog
          fullWidth
          open={this.state.open}
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          <DialogTitle>
            <IconButton
              aria-label="close"
              onClick={() => {
                this.setState({ open: false });
              }}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                color: (theme) => theme.palette.grey[500],
                backgroundColor: "gray",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className="flex gap-3 mt-3 shadow-lg lg:w-[25rem] p-2">
              <div>
                <img
                  src="https://cleancreations.com/data/extras/33.jpg?md=942dd43d411df162d707d76d17e5cefc"
                  className="h-40 w-48 rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-2">
                  <img src="/key.svg" alt="" />+ $25.00
                </div>
                <p className="font-semibold">Elderberry Syrup (16oz)</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
