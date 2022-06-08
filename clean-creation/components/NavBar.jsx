import React from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  }
  handleMouseEnter = () => {
    this.setState({
      isHovering: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      isHovering: false,
    });
  };
  render() {
    return (
      <div>
        <Navbar className="bg-white mx-5" collapseOnSelect expand="lg">
          {/* <Container> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link href="/currentmenu">
                <Nav.Link
                  onMouseEnter={() => {
                    this.setState({ hover1: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ hover1: false });
                  }}
                  style={{
                    color: this.state.hover1 === true ? "green" : "black",
                  }}
                  href="#title"
                >
                  Current Menu
                </Nav.Link>
              </Link>
              <Link href="/grabAndGo">
                <Nav.Link
                  onMouseEnter={() => {
                    this.setState({ hover2: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ hover2: false });
                  }}
                  style={{
                    color: this.state.hover2 === true ? "green" : "black",
                  }}
                  eventKey={2}
                  href="#title"
                >
                  Grab & Go
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-center">
            <Link href="/">
              <img
                src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e"
                alt=""
                style={{
                  height: "50px",
                  width: "70px",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Dropdown>
              {/* <button  style={{ backgroundColor: "#32CD32" }} > */}
                <Dropdown.Toggle
                className="border-success border"
                  id="dropdown-basic"
                  style={{ backgroundColor: "#32CD32", borderBlockColor:"#32CD32" }}
                >
                  Shop
                </Dropdown.Toggle>
              {/* </button> */}

              <Dropdown.Menu style={{ lineHeight: "35px", padding: "10px" }}>
                <Link href="/subscription" >
                  <Dropdown.Item href="#/action-1" className="hover:bg-green-900">
                    Subscription Meal Selection
                  </Dropdown.Item>
                </Link>
                <Link href="/alacarte">
                  <Dropdown.Item href="#/action-2">À la Carte</Dropdown.Item>
                </Link>
                <Link href="/byingredients">
                  <Dropdown.Item href="#/action-3">
                    Proteins by the Pound
                  </Dropdown.Item>
                </Link>
                <Link href="/customMealBuilder">
                  <Dropdown.Item href="#/action-4">
                    Custom Meal Builder
                  </Dropdown.Item>
                </Link>
                <Link href="/extras">
                  <Dropdown.Item href="#/action-5">Extras</Dropdown.Item>
                </Link>
                <Link href="/giftcard">
                  <Dropdown.Item href="#/action-6">Gift Card</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Link href="/meals">
              <Nav.Link
                style={{
                  color: this.state.hover3 === true ? "green" : "black",
                }}
                onMouseEnter={() => {
                  this.setState({ hover3: true });
                }}
                onMouseLeave={() => {
                  this.setState({ hover3: false });
                }}
                href="#/action-7"
              >
                Select Meals
              </Nav.Link>
            </Link>
            <Link href="screens/Blog">
              <Nav.Link
                style={{
                  color: this.state.hover4 === true ? "green" : "black",
                }}
                onMouseEnter={() => {
                  this.setState({ hover4: true });
                }}
                onMouseLeave={() => {
                  this.setState({ hover4: false });
                }}
                eventKey={2}
                href="#title"
              >
                Blog
              </Nav.Link>
            </Link>
            <Link href="/cart">
              <Nav.Link href="#/action-8">
                <img
                  src="https://cleancreations.com/assets/icons/cart.svg"
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </Nav.Link>
            </Link>

            <IconButton
              aria-label=""
              size="medium"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              style={{
                borderRadius: "50%",
                borderColor: "white",
                backgroundColor:
                  this.state.isHovering === true ? "#32CD32" : "white",
                color: this.state.isHovering === true ? "white" : "black",
              }}
            >
              <Typography>RB</Typography>
            </IconButton>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}
