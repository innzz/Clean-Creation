import React from 'react';
import { CardContent, Grid } from "@mui/material"
import { Card } from "react-bootstrap";
import Link from "next/link"
import styles from "../../styles/component-styles/Home-styles/GetStarted.module.css";
export default class Demo extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div className='h-[40rem]  lg:-mb-[45rem] -mb-96'>
                    <div className={styles.bgimage}></div>
                </div>
                <div className="lg:p-40 xs:p-0 mt-96">
                    <Card className={styles.bgtext} >
                        <CardContent className="lg:p-14" >
                            <Card.Text className="lg:text-7xl text-4xl font-semibold text-black" >Get Started<br /> With a Healthier You</Card.Text>
                            <Card.Text className="lg:text-[1.3rem] mt-5 text-black font-normal  lg:mt-0 -mt-4" >
                                We make eating healthy convenient and delicious so you can have more time to do the things you love.
                            </Card.Text>
                            <Link href={'/subscription'}>
                                <button style={{ backgroundColor: "#43b3ae" }} className="h-10 w-44 lg:h-14 lg:w-64">
                                    <p className="text-sm lg:text-lg text-white text-center mt-2">GET STARTED</p>
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}