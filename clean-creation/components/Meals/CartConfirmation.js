import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
export default class CartConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: false,
      pickup: false,
      state: 'Odisha',
      hiddenpickup: "hidden",
      hiddenpickup2: "hidden",
      hiddendelivery: "hidden",
      addNewCard: false,
      states: [
        {
          value: "Select",
          label: "--Select--",
        },
        {
          value: "Louisiana",
          label: "Louisiana",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <p className="lg:text-2xl text-xl font-bold text-gray-700 md:px-0 lg:px-0 px-3  pt-5 ">
            How would you like to receive your order?
          </p>

          <div className="flex gap-2 px-10 lg:px-0 place-content-center lg:place-content-start">
            <img className="h-5 w-5" src="/watch.svg" alt="" />
            <p className="font-semibold text-gray-700">
              Wednesday, Jun 08, 2022
            </p>
            <img src="/rightArrow.svg" className="w-3 mt-1 h-5" alt="" />
            <div className="flex items-center -mt-4 ">
              <input
                onClick={() => {
                  this.setState({ delivery: true });
                }}
                id="default-radio-1"
                type="radio"
                value="delivery"
                name="default-radio"
                className="w-4 h-4 -mt-10 lg:-mt-0 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 -mt-10 lg:-mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Delivery
              </label>
            </div>
            <div className="flex items-center -mt-4 ">
              <input
                onClick={() => {
                  this.setState({ pickup: true });
                }}

                id="default-radio-2"
                type="radio"
                value="pickup"
                name="default-radio"
                className="w-4 h-4 -mt-10 lg:-mt-0 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 -mt-10 lg:-mt-0 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pickup
              </label>
            </div>
          </div>
          {this.state.hiddenpickup === "hidden" & this.state.hiddenpickup2 === "hidden" ?
            <div className="mb-10 p-3 bg-gray-200 border-l-[7px] border-red-600 lg:leading-3">
              <p className="font-bold">An error occured!</p>
              <p>Please select a valid State to continue checkout process</p>
                <p onClick={()=>{this.setState({delivery:open})}} className="text-gray-500 underline cursor-pointer">Edit</p>
            </div>
            :
            <div>
              {this.state.hiddenpickup2 === null ?
                <div>
                  <div className="flex gap-3">
                    <img src="/google-location.svg" alt="" className="h-5 w-5" />
                    <p>Highland Park Market Place - 18303 Perkins Rd E Ste 409, 70810 Baton Rouge
                      <span className="underline ml-5 text-gray-400 cursor-pointer" onClick={() => { this.setState({ pickup: true }) }}>Edit</span></p>

                  </div>
                  <div className="flex gap-3">
                    <img src="/about.svg" alt="" className="h-3 w-3" />
                    <p> * orders will be available for pickup after 12:00 PM on Sunday and Wednesday each week *</p>
                  </div>
                </div>
                :
                <div>
                  <div className="flex gap-3">
                    <img src="/google-location.svg" alt="" className="h-5 w-5" />
                    <p> Gretna - 1105 Lafayette St, 70053 Gretna
                      <span className="underline ml-5 text-gray-400 cursor-pointer" onClick={() => { this.setState({ pickup: true }) }}>Edit</span></p>

                  </div>
                </div>
              }
            </div>

          }
          <p className="text-2xl text-gray-800 font-bold pt-5">
            Payment Method
          </p>
          <div className="flex items-center -mt-4 ">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-lg font-normal text-gray-600 dark:text-gray-300"
            >
              Credit Card
            </label>
          </div>
          <button
            onClick={() => { this.setState({ addNewCard: true }) }}
            type="button"
            className="mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg px-4 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <img src="/plus.svg" alt="" />
            Add new Card
          </button>
          <p className="text-2xl text-gray-800 font-bold pt-20">
            Add a Promo Code
          </p>
          <div className="mb-5 flex gap-3">
            <TextField
              id="standard-basic"
              label="Add promo code"
              variant="standard"
              fullWidth
            />
            <button className="lg:px-2 lg:py-3.5 lg:w-32 w-full  rounded-xl bg-gray-200 hover:bg-teal-500 hover:text-white">
              Apply Code
            </button>
          </div>
        </div>

        {/* Dialog Box for Pickup Delivery */}
        <Dialog
          fullWidth
          open={this.state.pickup}
          onClose={() => {
            this.setState({ pickup: false });
          }}
        >
          <DialogTitle>
            <p className="text-2xl text-gray-500 text-serif">
              Select Your Pickup
            </p>
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
                backgroundColor: "gray",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className="border-1 rounded-lg border-black p-2 ">
              <div onClick={() => { this.setState({ pickup: false, hiddenpickup: null, hiddenpickup2: "hidden" }) }} className="cursor-pointer">
                <p className="font-semibold lg:text-lg text-sm">Gretna</p>
                <p className=" grid place-content-end text-sm -mt-10">
                  Click to Select
                </p>
                <p className="-mt-3 lg:text-lg text-xs">
                  1105 Lafayette St 70053 Gretna | $0.00
                </p>
              </div>
            </div>
            <div className="border-1 rounded-lg border-black p-2 mt-4 ">
              <div onClick={() => { this.setState({ pickup: false, hiddenpickup2: null, hiddenpickup: "hidden" }) }} className="cursor-pointer">
                <p className="font-semibold lg:text-lg text-sm">
                  Highland Park Market Place
                </p>
                <p className=" grid place-content-end -mt-10 lg:text-sm text-xs">
                  Click to Select
                </p>
                <p className="-mt-3 lg:text-lg text-xs">
                  18303 Perkins Rd E Ste 409 70810 Baton Rouge | $0.00
                </p>
                <p className="text-xs lg:text-lg">
                  * orders will be available for pickup after 12:00 PM on Sunday
                  and Wednesday each week *
                </p>
              </div>
            </div>
          </DialogContent>
          <hr />
          <DialogContent className="hover:bg-gray-500 -mt-4 ">
            <div onClick={() => { this.setState({ pickup: false }) }} className="grid hover:text-white text-gray-400 place-content-center">
              <button className="">Cancel</button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dialog Box for Delivery */}
        <Dialog
          fullWidth
          open={this.state.delivery}
          onClose={() => {
            this.setState({ delivery: false });
          }}
        >
          <DialogTitle>
            <p className="text-2xl text-gray-500 text-serif">
              Delivery Address
            </p>
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
                backgroundColor: "gray",
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
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      fullWidth
                    />
                  </div>
                  <div className=" ">
                    <label className="text-xs">City</label>
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 py-4">
                  <div>
                    <label className="text-xs">State</label>
                    <TextField
                      fullWidth
                      id="standard-select-currency-native"
                      select
                      label=""
                      value={this.state.state}
                      onChange={(event) => {
                        this.setState({ state: event.target.value });
                      }}
                      SelectProps={{
                        native: true,
                      }}

                      helperText="Please select your state"
                      variant="standard"
                    >
                      {this.state.states.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option >
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <label className="text-xs">Zip Code</label>
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 py-4">
                  <div>
                    <label className="text-xs">Phone</label>
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      fullWidth
                    />
                  </div>
                  <div>
                    <label className="text-xs">Gate Code</label>
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="grid gap-2 px-2 py-4">
                  <div>
                    <label className="text-xs">Delivery Note</label>
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      fullWidth
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="flex items-center  ">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Save address to profile and use for all future deliveries
              </label>
            </div>
          </DialogContent>
          <hr />
          <DialogContent className=" -mt-4 ">
            <div className="grid grid-cols-2 divide-x">
              <div onClick={() => { this.setState({ delivery: false, hiddenpickup: "hidden", hiddenpickup2: "hidden" }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                <button className="">Cancel</button>
              </div>
              <div onClick={() => { this.setState({ delivery: false, hiddenpickup: "hidden", hiddenpickup2: "hidden" }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                <button className="">Save</button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        {/* Dialog Box after clicking on add mew card */}
        <Dialog
          fullWidth
          open={this.state.addNewCard}
          onClose={() => {
            this.setState({ addNewCard: false });
          }}
        >
          <DialogTitle>
            <p className="text-2xl text-gray-500 text-serif">
              Add New Card
            </p>
            <IconButton
              aria-label="close"
              onClick={() => {
                this.setState({ addNewCard: false });
              }}
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
          </DialogTitle>
          <DialogContent>

            <div className="grid lg:grid-cols-8 grid-cols-4">
              <div className="flex gap-2 col-span-2">
                <img src="/credit-card.svg" className="h-5 w-5" alt="" />
                <p className="text-gray-400 font-semibold">Card number</p>
              </div>
              <div className="lg:col-end-9 col-span-2">
                <p className="font-bold text-gray-400">MM / YY / CVC</p>
              </div>
            </div>

          </DialogContent>
          <hr />
          <DialogContent className=" -mt-4 ">
            <div className="grid grid-cols-2 divide-x">
              <div onClick={() => { this.setState({ addNewCard: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -ml-6 grid hover:text-white text-gray-400 place-content-center">
                <button className="">Cancel</button>
              </div>
              <div onClick={() => { this.setState({ addNewCard: false }) }} className="hover:bg-gray-500 p-3 -mt-5 -mb-5 -mr-6 grid hover:text-white text-gray-400 place-content-center">
                <button className="">Save</button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
