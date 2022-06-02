import React from "react";
export default class CleanCreationsBatonRough extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <p className="text-xl font-bold text-gray-700">Make Time for Well-Rounded Meals</p>
                    <p className=" text-gray-700">We also have a variety of options to choose from for every meal of the day, so you never have to worry about skipping breakfast again! Whether you prefer your breakfast sweet or savory, our menu can accommodate. From vegan french toast to tomato and zucchini quiche, you’ll always find something fresh and delicious to love. For lunch, try a kale and quinoa power salad or Italian stuffed bell pepper. And for dinner, be sure to try our Thai turkey meatballs or pescatarian jambalaya! And don’t worry about snacks, because we’ve got those too. From matcha power balls to cranberry energy bites, our snacks are made to satisfy, keeping you full and happy in-between meals.</p>
                    <p className="text-3xl font-bold text-gray-700">Hear It From Our Customers!</p>
                    <div className="grid place-content-center">
                        <video width="700" controls>
                            <source src="https://resources.cleancreations.com/wp-content/uploads/2022/03/2022-02-15s-1x1-Customer-Chronicles-Animation.mp4" type="video/mp4" />
                            <source src="path/myvideo.ogg" type="video/ogg" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <p className="text-3xl font-bold text-gray-700 mt-5">Clean Creations, Baton Rouge: FAQs</p>
                    <p className=" text-gray-700">Having healthy, delicious meals prepared for you by Clean Creations, Baton Rouge sounds great - but <span className="font-bold">how do you get started</span>? All you have to do is click the “<a className="no-underline" href="/">Get Started</a>” link on our homepage to set up an account. Once you create a profile, you can then visit the “Order” tab on our homepage to begin placing your order. It’s as easy as that!</p>
                    <p className=" text-gray-700">We also get a lot of questions about how our meal plans work, such as <span className="font-bold">are meal plans recurring</span>? The answer is yes. Our meal plans are subscriptions, and we charge you weekly, biweekly, or monthly based on your preferences. Customers also wonder: <span className="font-bold">can I choose my own meals</span>? Absolutely! We pride ourselves on preparing a wide variety of delicious, nutritious meals, allowing you to dictate your own meal plan. You get to choose your subscription meals before your initial checkout, and again after the account auto-renews. Even if you don’t have a subscription plan, your meals can be chosen under the “a la carte” ordering section. Customers also ask questions like “Do I have to order a meal plan?” Nope!  Meal plans are just one of the options we offer in addition to a la carte, bulk, or via our custom meal builder. With these last three options, you just receive food when you place an order. If you need to cancel an order due to unforeseen circumstances or vacation time, send all cancellation requests to customerservice@cleancreations.net.</p>
                    <p className=" text-gray-700">If you’re located in the Baton Rouge area, you might be wondering: Can I get delivery to the Baton Rouge area? And while we’re not offering delivery just yet, we do offer pick-up for our Clean Creations Baton Rouge customers. You can pick up your meals at our Perkins Road East location. Our Clean Creations Baton Rouge orders are available for pick up every Sunday and Wednesday every week after 12:00 PM. If you’d like more information about the Clean Creations Baton Rouge operation, please give us a call.</p>
                    <p className="text-3xl font-bold text-gray-700">Make Healthy Eating a Breeze with Clean Creations, Baton Rouge</p>
                    <p className=" text-gray-700">Maintaining a healthy lifestyle when you have a busy schedule can be exhausting. From meal planning to grocery shopping to preparing the food, eating right takes time. But with Clean Creations, Baton Rouge, we make healthy eating a breeze! Not only do we hand-select the freshest ingredients for your meals, but we also do all the cooking, cleaning up, and packaging for you. And better yet, you get to pick from our current menu, tailoring your meal plan to your palate. To help you eat healthy on a time crunch, Clean Creations provides you with fresh, healthy meals delivered right to your door or for pickup at our New Orleans or Baton Rouge locations. Eating well has never been more convenient with our large selection of meal plans and à la carte options. Sign up for Clean Creations today to start your healthy eating journey today!</p>
                    <div className="grid place-content-center">
                    <a href="/screens/Blog/read" class="mt-4  no-underline inline-flex items-center py-2 px-3 md:px-10 text-xl font-bold text-center text-white bg-lime-400 mb-10 rounded-lg">
                        SIGN UP FOR CLEAN CREATION
                    </a>
                    </div>


                </div>
            </div>
        )
    }
}