import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import { ProgressBar } from "react-bootstrap";

import CloseIcon from "@mui/icons-material/Close";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import Image from "next/image";
export default class CustomMealPack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
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
      <div className="p-3 lg:p-0">
        <div className="container rounded-xl mb-10 border">
          <div className="bg-lime-500 rounded-tl-xl rounded-tr-xl py-2 -ml-3 -mr-3.5 grid grid-cols-2  ">
            <div className="grid lg:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold text-white ml-2">
                  Pack #1
                </p>
              </div>
              <div className="flex">
                <div
                  className="inline-flex rounded-3xl shadow-sm lg:absolute left-52 p-0 ml-2"
                  role="group"
                >
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-l-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    0
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-r-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    +
                  </button>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className=" lg:-ml-24 ml-2 mt-2 bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />{" "}
                </svg>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="lg:absolute no-underline lg:right-28 w-40 bg-red-600  text-white rounded-lg inline-flex items-center justify-center px-0 py-1 "
              >
                <img src="/delete.svg" alt="" />
                <div className="text-left">
                  <div className="mb-1 text-md">Delete Pack</div>
                </div>
              </a>
            </div>
          </div>

          {/* Pack Portion */}
          <div className="grid lg:grid-cols-2 gap-5 mb-10">
            <div className="grid lg:grid-cols-2 gap-0 place-content-center ">
              <div className="lg:w-96 w-72 lg:-mt-44">
                <div className="flex">
                  <div className="border-2 border-lime-500 h-14 w-14 mt-3 flex place-content-center rounded-full">
                    <p className="text-xl font-bold text-lime-500 mt-2">1</p>
                  </div>
                  <div className="mt-3 ml-4">
                    <p className="text-xl font-semibold text-gray-700">
                      Choose your Proteins
                    </p>
                  </div>
                </div>
                <div className="container text-gray-500 pt-2 pb-8 grid grid-cols-2 mt-2 ">
                  <p className="text-xs">Carbs</p>
                  <p className="ml-20 text-xs">quantity</p>
                </div>
                <div className="flex">
                  <div className="w-2/3">
                    <TextField
                      fullWidth
                      className="-mt-10"
                      id="standard-select-currency-native"
                      select
                      label=""
                      value={this.state.menu}
                      onChange={(event) => {
                        this.setState({ menu: event.target.value });
                      }}
                      SelectProps={{
                        native: true,
                      }}
                      variant="standard"
                    >
                      {this.state.menu.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </TextField>
                  </div>

                  <div
                    className="inline-flex rounded-3xl h-10 -mt-10 ml-2"
                    role="group"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center py-0 px-3 text-sm font-medium text-gray-900 bg-white rounded-l-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center py-0 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center py-0 px-3 text-sm font-medium text-gray-900 bg-white rounded-r-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* Second one */}
              <div className="lg:w-96 w-72 lg:-mt-44 lg:ml-20">
                <div className="flex">
                  <div className="border-2 border-lime-500 h-14 w-14 mt-3 flex place-content-center rounded-full">
                    <p className="text-xl font-bold text-lime-500 mt-2">1</p>
                  </div>
                  <div className="mt-3 ml-4">
                    <p className="text-xl font-semibold text-gray-700">
                      Choose your Proteins
                    </p>
                  </div>
                </div>
                <div className="container text-gray-500 pt-2 pb-8 grid grid-cols-2 mt-2  ">
                  <p className="text-xs">Carbs</p>
                  <p className="ml-20 text-xs">quantity</p>
                </div>
                <div className="flex">
                  <div className="w-2/3">
                    <TextField
                      fullWidth
                      className="-mt-10"
                      id="standard-select-currency-native"
                      select
                      label=""
                      value={this.state.menu}
                      onChange={(event) => {
                        this.setState({ menu: event.target.value });
                      }}
                      SelectProps={{
                        native: true,
                      }}
                      variant="standard"
                    >
                      {this.state.menu.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </TextField>
                  </div>

                  <div
                    className="inline-flex rounded-3xl h-10 -mt-10 ml-2"
                    role="group"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center py-0 px-3 text-sm font-medium text-gray-900 bg-white rounded-l-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center py-0 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center py-0 px-3 text-sm font-medium text-gray-900 bg-white rounded-r-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:ml-64 lg:w-80 w-80 ml-3">
              <div className={styles.dietHolder}>
                <div className={styles.dietName}>
                  <h3>Calories</h3>
                  <p>
                    <span>0 cal</span> (0)
                  </p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>

              {/* //////////////////////////////////////////////// */}

              <div className={styles.dietHolder}>
                <div className={styles.dietName}>
                  <h3>Total Fat</h3>
                  <p>
                    <span>0.00 gr</span>(0)
                  </p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
                <div className={styles.innerDietHolder}>
                  <div className={styles.innerDiet}>
                    <h4>Saturated Fat</h4>
                    <p>0 cal (0)</p>
                  </div>
                  <div>
                    <ProgressBar className={styles.dietBar} />
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////////////////// */}

              <div className={styles.dietHolder}>
                <div className={styles.dietName}>
                  <h3>Cholesterol</h3>
                  <p>
                    <span>0.00 mg</span> (0)
                  </p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>

              {/* //////////////////////////////////////////////// */}

              <div className={styles.dietHolder}>
                <div className={styles.dietName}>
                  <h3>Sodium</h3>
                  <p>
                    <span>0.00 mg</span> (0)
                  </p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>

              {/* //////////////////////////////////////////////// */}

              <div className={styles.dietHolder}>
                <div className={styles.dietName}>
                  <h3>Total Carbohydrates</h3>
                  <p>
                    <span>0.00 gr</span>(0)
                  </p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
                <div className={styles.innerDietHolder}>
                  <div className={styles.innerDiet}>
                    <h4>Dietary Fiber</h4>
                    <p>0.00 gr (0)</p>
                  </div>
                  <div>
                    <ProgressBar className={styles.dietBar} />
                  </div>
                </div>
                {/* /// */}
                <div className={styles.innerDietHolder}>
                  <div className={styles.innerDiet}>
                    <h4>Total Sugars</h4>
                    <p>0.00 gr (0)</p>
                  </div>
                  <div>
                    <ProgressBar className={styles.dietBar} />
                  </div>
                </div>
                {/* // */}
                <div className={styles.innerDietHolder}>
                  <div className={styles.innerDiet}>
                    <h4>Included sugars</h4>
                    <p>0.00 gr (0)</p>
                  </div>
                  <div>
                    <ProgressBar className={styles.dietBar} />
                  </div>
                </div>
              </div>

              {/* ///////////////////////////////// */}

              <div className={styles.dietHolder}>
                <div className={styles.dietName}>
                  <h3>Protein</h3>
                  <p>
                    <span>0.00 gr</span> (0)
                  </p>
                </div>
                <div>
                  <ProgressBar className={styles.dietBar} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-[40rem] container">
          <div className="  p-5 lg:ml-6   ml-5 rounded-2xl">
            <Link
              href="#"
            >
              <a className=" no-underline inline-flex items-center py-2 px-3 text-medium text-center text-white bg-lime-500 rounded-lg ">
                <img src="/add.svg" alt="" />
                Add Extra Add-on
              </a>
            </Link>
          </div>
          <div className="  lg:p-10 p-5 lg:ml-6  -mt-20 lg:-mt-0  ml-5 rounded-2xl">
            <Link
              href="#"
            >
              <a className=" no-underline inline-flex items-center py-2 px-3 text-medium text-center text-white bg-lime-500 rounded-lg ">
                <img src="/add.svg" alt="" />
                Add Extra Add-on
              </a>
            </Link>
          </div>
        </div>
        <hr className="container -mt-6 text-lime-500" />

        <div className="container py-3  lg:ml-6  ml-5 rounded-2xl">
          <Link
            href="#"
          >
            <a
              className=" no-underline inline-flex items-center py-2 px-3 ml-[4.5rem] text-medium text-center text-white bg-lime-500 rounded-lg "
              onClick={() => {
                this.setState({ open: true });
              }}>
              <img src="/add.svg" alt="" />
              Add Extra Add-on
            </a>
          </Link>
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
