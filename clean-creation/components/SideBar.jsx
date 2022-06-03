import React from "react";
export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            hover3: true
        }
    }
    render() {
        return (
            <div>
                <aside className="w-32 hidden lg:contents" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                        <div className="mb-10 rounded-full">
                            <img src="https://cleancreations.com/data/config/image_placeholder.jpg?md=5aa06eb7aa5a83d1992520b885d63182" className=" bg-cover h-44 w-44 ml-2" style={{ borderRadius: "50%" }} alt="" />
                            <div className="absolute top-32 left-4 bg-gray-100 border-2 border-gray-200 p-1.5 rounded-full" style={{ color: "green" }}>
                                <svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> </svg>
                            </div>
                        </div>
                        <p className="pl-2 text-lg font-semibold text-gray-600">Welcome</p>
                        <p className="-mt-4 pl-6 text-xs text-gray-500" onMouseEnter={() => { this.setState({ hover: true }) }}
                            onMouseLeave={() => { this.setState({ hover: false }) }} style={{ color: this.state.hover === true ? 'green' : 'black' }}>Credencesoft</p>
                        <div className="-ml-5">
                            <ul className="space-y-2 mt-10">
                                <li className="mb-3">
                                    <a href="#" onMouseEnter={() => { this.setState({ hover1: true }) }}
                                        onMouseLeave={() => { this.setState({ hover1: false }) }} style={{ color: this.state.hover1 === true ? "green" : "black" }} className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z" /> </g> </svg>
                                        <span className="ml-3">Log off</span>
                                    </a>
                                </li>
                                <hr />
                                <li>
                                    <a onMouseEnter={() => { this.setState({ hover2: true }) }}
                                        onMouseLeave={() => { this.setState({ hover2: false }) }} style={{ color: this.state.hover2 === true ? "green" : "black" }} href="#" className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <span className="flex-1 ml-3 whitespace-nowrap">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <button type="button" className="flex bg-lime-500 text-white items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>My Subscription</span>
                                    </button>
                                    <ul id="dropdown-example" class=" py-2 space-y-2">
                                        <li>
                                            <a onMouseEnter={() => { this.setState({ hover4: true }) }}
                                                onMouseLeave={() => { this.setState({ hover4: false }) }} style={{ color: this.state.hover4 === true ? "green" : "black" }} href="#" class="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                                Subscription</a>
                                        </li>
                                        <li>
                                            <a onMouseEnter={() => { this.setState({ hover5: true }) }}
                                                onMouseLeave={() => { this.setState({ hover5: false }) }} style={{ color: this.state.hover5 === true ? "green" : "black" }} href="#" class="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                                Select meals</a>
                                        </li>
                                        <li>
                                            <a onMouseEnter={() => { this.setState({ hover6: true }) }}
                                                onMouseLeave={() => { this.setState({ hover6: false }) }} style={{ color: this.state.hover6 === true ? "green" : "black" }} href="#" class="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                                Macro Tracking</a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <button style={{ color: this.state.hover7 === true ? "green" : "black" }} type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <span onMouseEnter={() => { this.setState({ hover7: true }) }}
                                            onMouseLeave={() => { this.setState({ hover7: false }) }} class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>My Orders</span>
                                    </button>
                                    <ul id="dropdown-example" class=" py-2 space-y-2">
                                        <li>
                                            <a onMouseEnter={() => { this.setState({ hover8: true }) }}
                                                onMouseLeave={() => { this.setState({ hover8: false }) }} style={{ color: this.state.hover8 === true ? "green" : "black" }} href="#" class="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                                Bags
                                            </a>
                                        </li>
                                        <li>
                                            <a onMouseEnter={() => { this.setState({ hover9: true }) }}
                                                onMouseLeave={() => { this.setState({ hover9: false }) }} style={{ color: this.state.hover9 === true ? "green" : "black" }} href="#" class="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
                                                Checkouts
                                            </a>
                                        </li>
                                        <li>
                                            <a onMouseEnter={() => { this.setState({ hover10: true }) }}
                                                onMouseLeave={() => { this.setState({ hover10: false }) }} style={{ color: this.state.hover10 === true ? "green" : "black" }} href="#" class="no-underline flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /> </svg>
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
        )
    }
}