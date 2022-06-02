import { Button, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
export default class Getstarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Card className="bg-dark mb-20">
                    <Card.Img className="md:h-[47rem] h-[20rem]" src="https://cleancreations.com/data/modulesfiles/c05468f3dc8c502a29f7220836926013_item1_image.jpg?md=37ac9e542695bf8315609f74a842f117" alt="Card image" />
                    <Card.ImgOverlay className="md:p-[20rem] p-[0rem]" >
                        <div className="md:p-40 xs:p-0">
                        <Card className="md:p-[0rem] p-[0rem] " style={{
                            margin: "0px",
                            backgroundColor: "#ffffff",
                            opacity: 0.6,
                        }}>
                            <CardContent className="md:p-14" style={{
                                fontWeight: "bold",
                                color: "#000000"
                            }}>
                                <Card.Text  className="md:text-8xl text-4xl" >Get Started<br /> With a Healthier You</Card.Text>
                                <Card.Text className="md:text-xl font-normal md:font-bold md:mt-0 -mt-4" >
                                We make eating healthy convenient and delicious so you can have more time to do the things you love.
                                </Card.Text>
                                <button className="h-10 w-44 md:h-14 md:w-64 bg-green-600"><p className="text-sm md:text-lg text-white text-center mt-2">GET STARTED</p></button>
                            </CardContent>
                        </Card>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        )
    }
}