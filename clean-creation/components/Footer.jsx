import { IconButton, List, ListItem, ListItemButton, ListItemText, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Card, TextField } from "@mui/material";
import React from "react";
import { Button, ButtonGroup, Col, Container, ListGroup, Row } from "react-bootstrap";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
export default class FooterHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover1: false,
            hover2: false,
            open: false
        }
    }

    render() {
        console.log(this.state.footerMenu)
        return (
            <div style={{ backgroundColor: "black", color: "white" }}>
                <Container style={{ padding: "20px" }}>
                    <Row>
                        <Col>
                            <Typography style={{ fontSize: "40px" }}>Clean Creations</Typography>
                            <h6 onMouseEnter={() => { this.setState({ hover1: true }) }} onMouseLeave={() => { this.setState({ hover1: false }) }} style={{ color: this.state.hover1 === true ? "green" : "white" }}>504-309-5427</h6>
                            <h6 onMouseEnter={() => { this.setState({ hover2: true }) }} onMouseLeave={() => { this.setState({ hover2: false }) }} style={{ color: this.state.hover2 === true ? "green" : "white" }}>customerservice@cleancreations.net</h6>

                            <ButtonGroup style={{ marginTop: "50px" }}>
                                <Button onClick={() => { this.setState({ open: true }) }} style={{ backgroundColor: "whitesmoke", color: "grey", borderRadius: "30px" }}>Sign Up for our Newsletter</Button>
                                <Button style={{ backgroundColor: "whitesmoke", color: "grey", borderRadius: "30px", marginLeft: "10px" }}>Invite a friend</Button>
                            </ButtonGroup><br />
                            <ButtonGroup style={{ marginTop: "30px" }}>
                                <IconButton href="https://twitter.com/clean_creations" style={{ height: "40px", width: "40px", backgroundColor: "white" }}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton href="https://www.facebook.com/CleanCreations/" style={{ height: "40px", width: "40px", backgroundColor: "white", marginLeft: "10px" }}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/eat_cleancreations/" style={{ height: "40px", width: "40px", backgroundColor: "white", marginLeft: "10px" }}>
                                    <InstagramIcon />
                                </IconButton>
                            </ButtonGroup><br />
                            <Typography style={{ fontSize: "12px", marginTop: "60px" }}>© 2022 Clean Creations. All Rights Reserved.</Typography>
                        </Col>
                        <Col className="justify-content-end">
                            <ListGroup style={{ backgroundColor: "black" }}>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", lineHeight: "25px" }}><h5>Clean Creations</h5></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Current Menu</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Contact Us</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Privacy Policy</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>F.A.Q.</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Pickup Locations</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Grab & Go</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Blog</b></Typography></ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className="justify-content-end">
                            <ListGroup style={{ backgroundColor: "black" }}>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", lineHeight: "25px" }}><h5>Meal Ordering</h5></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Subscription Meal Selection</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>À la Carte</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Proteins by the Pound</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Custom Meal Builder</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Extras</b></Typography></ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}><Typography style={{ fontSize: "15px", fontFamily: "serif", lineHeight: "13px" }}><b>Gift Card</b></Typography></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
                <Dialog open={this.state.open} onClose={() => { this.setState({ open: false }) }}>
                    <Card style={{ width: "450px" }}>
                        <DialogTitle>
                            <Typography style={{ color: "green", fontSize: "35px" }}>Newsletter</Typography>
                            <IconButton
                                aria-label="close"
                                onClick={() => { this.setState({ open: false }) }}
                                sx={{
                                    position: 'absolute',
                                    right: -10,
                                    top: -10,
                                    color: (theme) => theme.palette.grey[500],
                                    backgroundColor: "black"
                                }}
                            >
                                <CloseIcon onClick={() => { this.setState({ open: false }) }} />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <Typography>Signup for our newsletter to receive updates, new menu changes, and special offers!</Typography>
                            <input  style={{padding:"5px", width:"100%"}} type="text" placeholder="Email" />
                            <Button variant="contained" style={{backgroundColor:"green",color:"white", width:"100%", marginTop:"10px"}}>Subscribe</Button>
                        </DialogContent>
                    </Card>
                </Dialog>
            </div>
        )
    }
}