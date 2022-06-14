import React from "react";
export default class MenuItem extends React.Component {
    render() {
        return (
            <div>
                <div className="grid lg:grid-cols-2 gap-10 lg:mx-24">
                    <div>
                        <img className="rounded-xl" src="https://cleancreations.com/data/meals/251.jpg?md=272ee44ac6e0f0904a5a41adc74bfb66" alt="" />
                        <div>
                            <img className="h-20 w-32 my-3 rounded-xl" src="https://cleancreations.com/data/meals/251.jpg?md=272ee44ac6e0f0904a5a41adc74bfb66" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700 font-semibold text-3xl">Balsamic Chicken Salad (16 oz)</p>
                        <button className="h-7 w-7 text-white font-semibold bg-blue-700 rounded-full">E</button>
                        <p className="text-sm mt-3">gluten free, dairy free, nut free</p>
                        <p className="font-semibold">Available sizes:</p>
                        <p className="text-sm -mt-3">Regular</p>
                        <div className="bg-amber-500 flex rounded-xl py-1 lg:gap-2  hover:scale-110">
                            <div className="grid place-content-center">
                                <img src="/questionmark.svg" className="h-20 w-20" alt="" />
                            </div>
                            <div>
                                <p className="text-2xl font-semibold mt-2 text-white">
                                    Do you have a subscription?
                                </p>
                                <p className="text-white text-lg -mt-2">Order your meals by clicking here</p>
                            </div>
                            <div className="grid place-content-center">
                                <img src="/rightArrowWhite.svg" className="h-16 w-10 mt-2 lg:ml-16" alt="" />
                            </div>
                        </div>

                        {/*  */}
                        <div className="bg-gray-800 flex rounded-xl py-1 px-2 mb-5 gap-4  mt-2  hover:scale-110">
                            <div className="grid place-content-center ml-2 ">
                                <img src="/plusCircleWhite.svg" className="h-10 w-10" alt="" />
                            </div>
                            <div>
                                <p className="text-2xl  font-semibold mt-2 text-white">
                                    Add meals to your shopping cart
                                </p>
                                <p className="text-white text-lg -mt-2">Order as À la Cart</p>
                            </div>
                            <div className="grid place-content-center">
                                <img src="/downArrowWhite.svg" className="h-16 w-10 mt-2 lg:ml-5" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab */}
                <div className="lg:mx-20 lg:mt-5">
                    <div className="mb-4 border-b border-gray-200 bg-gray-100 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="mr-2 -ml-8 bg-gray-200" role="presentation">
                                <button className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Ingredients</button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Allergens</button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Macros</button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div className=" p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Balsamic Chicken Salad (Shaved red onion (red onion), Dried Cranberry, Bias Cut Celery, Balsamic Chicken Dressing (balsamic, basil, Minced Garlic, Dijon Mustard, Black Pepper, Honey, Olive Oil Blend), Balsamic Chicken for Chicken Salad (Chicken (raw), Black Pepper, salt, italian seasoning, Paprika)).</p>
                        </div>
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}