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
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ContentCut from '@mui/icons-material/ContentCut';
import LogoutIcon from '@mui/icons-material/Logout';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      anchor: null,
      menu: false,
      anchor2: null,
      menu2: false,
      open: Boolean(null)
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

            <button
              id="basic-button"
              aria-controls={this.state.open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={this.state.open ? 'true' : undefined}
              onClick={(e) => this.setState({ anchor2: e.currentTarget, menu2: false })}
              className="bg-lime-400 px-3 py-2 flex gap-2 text-white font-semibold ">Shop
              <img src="/caretDown.svg" alt="" className="h-3 w-3 mt-2" />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={this.state.anchor2}
              open={this.state.anchor2}
              onClose={() => { this.setState({ anchor2: null, menu2: false }) }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              style={{ width: "500px" }}
            >
              <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor2: null, menu2: false }) }}>
                <Link href="/subscription"  >
                  <ListItemText> Subscription Meal Selection</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor2: null, menu2: false }) }}>
                <Link href="/alacarte">
                  <ListItemText>À la Carte</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor2: null, menu2: false }) }}>
                <Link href="/byingredients">
                  <ListItemText>Proteins by the Pound</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor2: null, menu2: false }) }}>
                <Link href="/customMealBuilder">
                  <ListItemText>Custom Meal Builder</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor2: null, menu2: false }) }}>
                <Link href="/extras">
                  <ListItemText>Extras</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor2: null, menu2: false }) }}>
                <Link href="/giftcard">
                  <ListItemText>Gift Card</ListItemText>
                </Link>
              </MenuItem>
            </Menu>



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
              id="basic-button"
              aria-controls={this.state.open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={this.state.open ? 'true' : undefined}
              onClick={(e) => this.setState({ anchor: e.currentTarget, menu: false })}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              style={{
                position: "absolute",
                borderRadius: "50%",
                borderColor: "white",
                backgroundColor:
                  this.state.isHovering === true ? "#9efd38" : "white",
                color: this.state.isHovering === true ? "white" : "#32cd32",
              }}
            >
              <Typography className="font-bold">RB</Typography>
            </IconButton>




          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
        <Menu
          id="basic-menu"
          anchorEl={this.state.anchor}
          open={this.state.anchor}
          onClose={() => { this.setState({ anchor: null, menu: false }) }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          style={{ width: "500px" }}
        >
          <Typography style={{ fontSize: "12px", paddingLeft: "20px", marginTop: "5px" }}>Rekha Baitharu</Typography>
          <hr />
          <MenuItem className="hover:bg-lime-400  mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor: null, menu: false }) }}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <Link href="/profile"  >
              <ListItemText>Profile</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor: null, menu: false }) }}>
            <ListItemIcon>
              <SubscriptionsIcon fontSize="small" />
            </ListItemIcon>
            <Link href="/subscription">
              <ListItemText>My Subscription</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem className="hover:bg-lime-400 mx-2 rounded-lg hover:drop-shadow-2xl" onClick={() => { this.setState({ anchor: null, menu: false }) }}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Log Off</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
