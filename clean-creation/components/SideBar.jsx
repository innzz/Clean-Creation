import React from "react";
import Link from "next/link"
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
              style={{ color: this.state.hover === true ? "#43b3ae" : "black" }}
            >
              Credencesoft
            </p>
            <div className="-ml-5">
              <ul className="space-y-2 mt-10">
                <li className="mb-3">
                  <Link href="/"  passHref>
                    <div
                      style={{
                        color: this.state.hover1 === true ? "#43b3ae" : "black",
                      }}
                      onMouseEnter={() => {
                        this.setState({ hover1: true });
                      }}
                      className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group"
                      onMouseLeave={() => {
                        this.setState({ hover1: false });
                      }}>
                      <img src="/logoff.svg" className="h-5 w-5 group-hover:text-teal-500" alt="" />
                      <span className="ml-3 group-hover:text-teal-500">Log off</span>
                    </div>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link href="/profile">
                    <a
                      className="flex no-underline bg-teal-500 text-white items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                      style={{
                        color: this.state.hover2 === true ? "#43b3ae" : "black",
                      }} onMouseEnter={() => {
                        this.setState({ hover2: true });
                      }}
                      onMouseLeave={() => {
                        this.setState({ hover2: false });
                      }}>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        My Profile
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                      className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-teal-500"
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
                      <Link href="/subscription">
                        <a
                          style={{
                            color: this.state.hover4 === true ? "#43b3ae" : "black",
                          }}
                          onMouseEnter={() => {
                            this.setState({ hover4: true });
                          }}
                          className="no-underline flex items-center p-2 pl-11 w-full group-hover:text-teal-500 text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                          onMouseLeave={() => {
                            this.setState({ hover4: false });
                          }}>
                          <img src="/rightArrowSidebar.svg" className="group-hover:text-teal-500" alt="" />
                          Subscription
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/subscription">
                        <a
                          style={{
                            color: this.state.hover5 === true ? "#43b3ae" : "black",
                          }}
                          onMouseEnter={() => {
                            this.setState({ hover5: true });
                          }}
                          className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                          onMouseLeave={() => {
                            this.setState({ hover5: false });
                          }}>
                          <img src="/rightArrowSidebar.svg" alt="" />
                          Select meals
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/macroTracking">
                        <a
                          style={{
                            color: this.state.hover6 === true ? "#43b3ae" : "black",
                          }}
                          onMouseEnter={() => {
                            this.setState({ hover6: true });
                          }}
                          className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group"
                          onMouseLeave={() => {
                            this.setState({ hover6: false });
                          }}>
                          <img src="/rightArrowSidebar.svg" alt="" />
                          Macro Tracking
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    style={{
                      color: this.state.hover7 === true ? "#43b3ae" : "black",
                    }}
                    type="button"
                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group"
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
                      <Link href="/">
                        <a
                          style={{
                            color: this.state.hover8 === true ? "#43b3ae" : "black",
                          }} onMouseEnter={() => {

                            this.setState({ hover8: true });
                          }}
                          className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                          onMouseLeave={() => {
                            this.setState({ hover8: false });
                          }}>
                          <img src="/rightArrowSidebar.svg" alt="" />
                          Bags
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          style={{
                            color: this.state.hover9 === true ? "#43b3ae" : "black",
                          }}
                          onMouseEnter={() => {
                            this.setState({ hover9: true });
                          }}
                          className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                          onMouseLeave={() => {
                            this.setState({ hover9: false });
                          }}>
                          <img src="/rightArrowSidebar.svg" alt="" />
                          Checkouts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/digitalWallet">
                        <a
                          style={{
                            color:
                              this.state.hover10 === true ? "#43b3ae" : "black",
                          }}
                          onMouseEnter={() => {
                            this.setState({ hover10: true });
                          }}
                          className="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group "
                          onMouseLeave={() => {
                            this.setState({ hover10: false });
                          }}  >
                          <img src="/rightArrowSidebar.svg" alt="" />
                          Digital Wallet Transactions
                        </a>
                      </Link>
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
