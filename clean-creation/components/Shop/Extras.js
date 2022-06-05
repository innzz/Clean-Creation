import React from "react";
import SelectDate from "./SelectDate";
export default class Extras extends React.Component {
    render() {
        return (
            <div>
                <div className="bg-lime-500">
                    <div className="container p-2">
                        <p className="text-3xl font-semibold text-white">Extras</p>
                    </div>
                </div>
                <SelectDate />
                <div className="container">
                    <p className="font-semibold text-xl text-gray-600">2. Choose your extras</p>
                    <div className="flex gap-3 mt-3 shadow-lg rounded-lg mb-10 lg:w-[40rem] p-2">
                        <div>
                            <img src="https://cleancreations.com/data/extras/33.jpg?md=942dd43d411df162d707d76d17e5cefc" className="h-40 w-48 rounded-lg" alt="" />
                        </div>

                        <div className="grid lg:grid-cols-2">
                            <div>
                                <div className="flex gap-2 bg-orange-500 text-white rounded-lg w-28 px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:"white"}} width="16" height="16" fill="currentColor" class="mt-1 ml-1 bi bi-tags-fill" viewBox="0 0 16 16"> <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /> <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" /> </svg>
                                    + $25.00
                                </div>
                                <p className="font-semibold">Elderberry Syrup (16oz)</p>
                            </div>
                            <div class="inline-flex rounded-md shadow-sm lg:ml-10 w-44 h-10 lg:mt-24" role="group">
                                <button type="button" class="py-2 px-1.5 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    -
                                </button>
                                <button type="button" class="py-2 px-1.5 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    0
                                </button>
                                <button type="button" class="py-2 px-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    +
                                </button>
                                <button type="button" class=" py-2 px-2 text-sm font-medium text-white bg-lime-500 rounded-r-md border border-gray-200 ">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}