import React from "react";
import Link from "next/link"
import Image from "next/image"
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    img: "https://resources.cleancreations.com/wp-content/uploads/2022/04/undefined-Imgur-41.jpg",
                    date: "April 22, 2022",
                    heading: "Is your Child Addicted to Sugar? Here's What You Can Do",
                    body: "As a parent, it can be difficult to ensure that your child makes healthy choices when it comes to food. The majority of children crave sugar regularly for many reasons. While it is normal for a child to want sugary foods, it can become unhealthy in excess. You may be wondering, is your child addicted […]",
                }, {
                    img: "https://resources.cleancreations.com/wp-content/uploads/2022/04/undefined-Imgur-40.jpg",
                    date: "April 13, 2022",
                    heading: "Emotional Eating in Children: Are You Missing the Signs?",
                    body: "Eating habits are different for everyone, especially children. At such a young age, adolescents are incredibly susceptible to picking up different habits from their parents, as well as their environments. One of these habits can be emotional eating in children. There are several signs that a child may be developing or already have emotional eating […]",
                }, {
                    img: "https://resources.cleancreations.com/wp-content/uploads/2022/03/undefined-Imgur-31.jpg",
                    date: "March 21, 2022",
                    heading: "How to Make Healthy Lifestyle Changes for Lent",
                    body: "Every year, individuals make the choice to give up certain things for Lent. Whether this is giving up junk food, or using less social media, these changes are meant to help individuals make healthier lifestyle choices. It has been proven that it takes 21 days to form a habit. Lent is almost twice as long […]",
                }, {
                    img: "https://resources.cleancreations.com/wp-content/uploads/2022/03/undefined-Imgur-22.jpg",
                    date: "February 18, 2022",
                    heading: "5 Top Food Trends for 2022",
                    body: "Each year, several top food trends rise above the rest. Some become short-lived fads that do not sustain their popularity, but some become lasting trends that people integrate into their diets. Over the past few years, society has begun to take into consideration what foods are truly the best, rather than what delivers quick, empty […]",
                },
            ]
        }
    }
    render() {
        return (
            <div className="container text-center gap-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {this.state.blogs.map((s,i) => {
                    return (
                        <div key={i} className="max-w-sm bg-white   border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <Image className="" src={s.img} alt="" />
                            <button className="bg-orange-500 text-white text-center px-3 py-1 rounded-lg -mt-2">{s.date}</button>
                            </Link>
                            <div className="p-2 text-center">
                                <h5 style={{ fontFamily: "serif" }} className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{s.heading}</h5>

                                <p className="mb-3 pl-5 pr-5 pt-3  text-lg font-normal text-gray-700 dark:text-gray-400">{s.body}</p>
                                <Link href="/screens/Blog/id" className="mt-4 no-underline inline-flex items-center py-2 px-10 text-xl font-bold text-center text-white bg-lime-400 mb-10 rounded-lg hover:scale-110">
                                    READ MORE
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}