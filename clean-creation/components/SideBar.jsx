import React from "react";
import Image from "next/image";
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hover3: true,
    };
  }
  render() {
    return (
      <div>
        <aside className="w-32 hidden lg:contents" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <div className="mb-10 rounded-full">
              <img
                src="https://cleancreations.com/data/config/image_placeholder.jpg?md=5aa06eb7aa5a83d1992520b885d63182"
                className=" bg-cover h-44 w-44 ml-2"
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <div
                className="absolute top-32 left-4 bg-gray-100 border-2 border-gray-200 p-1.5 rounded-full"
                style={{ color: "green" }}
              >
                <img src="/edit.svg" alt="" />
              </div>
            </div>
            <p className="pl-2 text-lg font-semibold text-gray-600">Welcome</p>
            <p
              className="-mt-4 pl-6 text-xs text-gray-500"
              onMouseEnter={() => {
                this.setState({ hover: true });
              }}
              onMouseLeave={() => {
                this.setState({ hover: false });
              }}
              style={{ color: this.state.hover === true ? "green" : "black" }}
            >
              Credencesoft
            </p>
            <div className="-ml-5">
              <ul className="space-y-2 mt-10">
                <li className="mb-3">
                  <a
                    href="#"
                    onMouseEnter={() => {
                      this.setState({ hover1: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ hover1: false });
                    }}
                    style={{
                      color: this.state.hover1 === true ? "green" : "black",
                    }}
                    className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img src="/logoff.svg" alt="" />
                    <span className="ml-3">Log off</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    onMouseEnter={() => {
                      this.setState({ hover2: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ hover2: false });
                    }}
                    style={{
                      color: this.state.hover2 === true ? "green" : "black",
                    }}
                    href="#"
                    className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Profile
                    </span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex bg-lime-500 text-white items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <span
                      className="flex-1 ml-3 text-left whitespace-nowrap"
                      sidebar-toggle-item
                    >
                      My Subscription
                    </span>
                  </button>
                  <ul id="dropdown-example" className=" py-2 space-y-2">
                    <li>
                      <a
                        onMouseEnter={() => {
                          this.setState({ hover4: true });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hover4: false });
                        }}
                        style={{
                          color: this.state.hover4 === true ? "green" : "black",
                        }}
                        href="#"
                        className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <img src="/rightArrowSidebar.svg" alt="" />
                        Subscription
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseEnter={() => {
                          this.setState({ hover5: true });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hover5: false });
                        }}
                        style={{
                          color: this.state.hover5 === true ? "green" : "black",
                        }}
                        href="#"
                        className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <img src="/rightArrowSidebar.svg" alt="" />
                        Select meals
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseEnter={() => {
                          this.setState({ hover6: true });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hover6: false });
                        }}
                        style={{
                          color: this.state.hover6 === true ? "green" : "black",
                        }}
                        href="#"
                        className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <img src="/rightArrowSidebar.svg" alt="" />
                        Macro Tracking
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    style={{
                      color: this.state.hover7 === true ? "green" : "black",
                    }}
                    type="button"
                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <span
                      onMouseEnter={() => {
                        this.setState({ hover7: true });
                      }}
                      onMouseLeave={() => {
                        this.setState({ hover7: false });
                      }}
                      className="flex-1 ml-3 text-left whitespace-nowrap"
                      sidebar-toggle-item
                    >
                      My Orders
                    </span>
                  </button>
                  <ul id="dropdown-example" className=" py-2 space-y-2">
                    <li>
                      <a
                        onMouseEnter={() => {
                          this.setState({ hover8: true });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hover8: false });
                        }}
                        style={{
                          color: this.state.hover8 === true ? "green" : "black",
                        }}
                        href="#"
                        className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <img src="/rightArrowSidebar.svg" alt="" />
                        Bags
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseEnter={() => {
                          this.setState({ hover9: true });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hover9: false });
                        }}
                        style={{
                          color: this.state.hover9 === true ? "green" : "black",
                        }}
                        href="#"
                        className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <img src="/rightArrowSidebar.svg" alt="" />
                        Checkouts
                      </a>
                    </li>
                    <li>
                      <a
                        onMouseEnter={() => {
                          this.setState({ hover10: true });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hover10: false });
                        }}
                        style={{
                          color:
                            this.state.hover10 === true ? "green" : "black",
                        }}
                        href="#"
                        className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <img src="/rightArrowSidebar.svg" alt="" />
                        Digital Wallet Transactions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
