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
      hidden: "hidden",
      count: 0
    };
  }
  minus = () => {
    if (this.state.count >= 1) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  plus = () => {
      this.setState({
        count: this.state.count + 1
      })
  }
  render() {
    return (
      <div>
        <div className="lg:p-10 p-3 lg:ml-6 shadow lg:w-[69rem] w-[23rem] ml-5 rounded-2xl">
          <button
            onClick={() => {
              this.setState({ open: true });
            }}
            href="/"
          ><a className=" no-underline inline-flex items-center py-2 px-3 text-medium text-center text-white bg-teal-500 rounded-lg ">
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
          <div>
            <div className={this.state.hidden}>
              <div className="flex gap-3 mt-3  shadow-lg rounded-lg mb-0 lg:w-[25rem] p-2">
                <div>
                  <img
                    src="https://cleancreations.com/data/extras/33.jpg?md=942dd43d411df162d707d76d17e5cefc"
                    className="h-40 w-32 rounded-lg"
                    alt=""
                  />
                </div>

                <div className="  ">
                  <div>
                    <div className="flex gap-2">
                      <img src="/tags-fill.svg" className="h-5 w-5" alt="" />+ $25.00
                    </div>
                    <p className="font-semibold">Elderberry Syrup (16oz)</p>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm lg:ml-20 w-40 h-10 mt-5"
                    role="group"
                  >
                    <button
                      onClick={this.minus}
                      type="button"
                      className="py-2 px-1.5 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="py-2 px-1.5 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      {this.state.count}
                    </button>
                    <button
                      onClick={this.plus}
                      type="button"
                      className="py-2 px-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className=" py-2 px-2.5 text-sm font-medium text-white bg-lime-500 rounded-r-md border border-gray-200 "
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="lg:p-10 p-5 shadow lg:ml-6 lg:w-[69rem] w-[23rem] ml-5 mb-5 rounded-2xl flex flex-wrap lg:flex-nowrap place-content-center gap-5">
          <button >
            <a href="/cart" className=" no-underline lg:w-[30rem] sm:w-[20rem] bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center lg:px-4 px-14 py-3 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <img src="/cart.svg" alt="" />
              <div className="ml-2 text-left">
                <div className="mb-1 lg:text-md text-sm">CONTINUE TO CART</div>
              </div>
            </a>
          </button>
          <button href="/" >
            <a className=" no-underline lg:w-[30rem] sm:w-[20rem] bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center lg:px-4 px-1 py-3 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
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
          <DialogContent onClick={() => { this.setState({ hidden: null, open: false }) }}>
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
                  <img src="/tags-fill.svg" alt="" />+ $25.00
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
