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
        <Navbar className="bg-white" collapseOnSelect expand="lg">
          <Container>
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
              <img
                src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e"
                alt=""
                style={{ height: "50px", width: "70px", marginTop: "5px" }}
              />
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "green" }}
                  id="dropdown-basic"
                >
                  Shop
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ lineHeight: "35px", padding: "10px" }}>
                  <Dropdown.Item href="#/action-1">
                    Subscription Meal Selection
                  </Dropdown.Item>
                  <Link href="/alacarte">
                    <Dropdown.Item href="#/action-2">À la Carte</Dropdown.Item>
                  </Link>
                  <Dropdown.Item href="#/action-3">
                    Proteins by the Pound
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Custom Meal Builder
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Extras</Dropdown.Item>
                  <Link href="/giftcard">
                    <Dropdown.Item href="#/action-3">Gift Card</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
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
                href="/meals"
              >
                Select Meals
              </Nav.Link>
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
              <Nav.Link>
                <img
                  src="https://cleancreations.com/assets/icons/cart.svg"
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </Nav.Link>

              <IconButton
                aria-label=""
                size="medium"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={{
                  borderRadius: "50%",
                  borderColor: "white",
                  backgroundColor:
                    this.state.isHovering === true ? "green" : "white",
                  color: this.state.isHovering === true ? "white" : "black",
                }}
              >
                <Typography>RB</Typography>
              </IconButton>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
